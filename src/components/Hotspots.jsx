/* eslint-disable no-unused-vars */
import { useState } from "react"
import Sidebar from "./Sidebar"

const NearbyHotspots = () => {
  const [regionCode, setRegionCode] = useState("")
  const [hotspots, setHotspots] = useState([])
  const [selectedHotspot, setSelectedHotspot] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const fetchHotspots = async () => {
    if (!regionCode) {
      setError("Please enter a region code.")
      return
    }

    setLoading(true)
    setError("")

    try {
      const response = await fetch(
        `https://api.ebird.org/v2/ref/hotspot/${regionCode}?fmt=json`,
        {
          headers: {
            "x-ebirdapitoken": import.meta.env.VITE_EBIRD_API_KEY,
          },
        }
      )

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }

      const data = await response.json()
      setHotspots(data.slice(0, 10))
    } catch (err) {
      setError("Failed to fetch hotspots. Please check the region code.")
    } finally {
      setLoading(false)
    }
  }

  const fetchHotspotInfo = async (locId) => {
    setLoading(true)
    setError("")
    setSelectedHotspot(null)

    try {
      const response = await fetch(
        `https://api.ebird.org/v2/ref/hotspot/info/${locId}`,
        {
          headers: {
            "x-ebirdapitoken": import.meta.env.VITE_EBIRD_API_KEY,
          },
        }
      )

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }

      const data = await response.json()
      setSelectedHotspot(data)
    } catch (err) {
      setError("Failed to fetch hotspot info. Try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      {/* <Sidebar /> */}

      {/* Main Content */}
      <div className="flex-1 p-5 md:ml-64 mt-12 max-w-4xl mx-auto w-full">
        <header className="mb-8 space-y-4 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">
            Nearby Birding Hotspots
          </h1>
          <p className="text-gray-600">
            Enter a region code to get nearby birding hotspots.
          </p>
        </header>

        <div className="space-y-4 flex flex-col md:items-center lg:items-start">
          <input
            type="text"
            placeholder="Enter region code"
            value={regionCode}
            onChange={(e) => setRegionCode(e.target.value)}
            className="w-full md:w-full p-2 shadow-md border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={fetchHotspots}
            className="p-2 shadow-md border bg-blue-500 text-white hover:bg-blue-600 rounded-md font-bold w-full sm:w-auto"
          >
            Search
          </button>
        </div>

        {loading && (
          <p className="text-blue-500 mt-4 text-center">Loading...</p>
        )}
        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

        <ul className="mt-6 space-y-4">
          {hotspots.map((hotspot) => (
            <li
              key={hotspot.locId}
              onClick={() => fetchHotspotInfo(hotspot.locId)}
              className="p-4 shadow-md border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100"
            >
              <h3 className="text-lg font-semibold">{hotspot.locName}</h3>
              <p className="text-gray-600">Location ID: {hotspot.locId}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Sidebar */}
      <div className="fixed right-0 top-0 h-screen w-full md:w-1/4 bg-gray-100 p-5 overflow-y-auto hidden md:block">
        <div className="mb-8 space-y-4">
          <h3 className="text-xl font-semibold">Birdwatching Matters</h3>
          <p className="text-gray-600">
            Your contributions help track bird populations and biodiversity.
          </p>
        </div>

        {selectedHotspot && (
          <div className="mt-6 p-4 shadow-md border border-gray-300 rounded-md">
            <h2 className="text-xl font-bold">{selectedHotspot.locName}</h2>
            <p className="text-gray-600">
              Location ID: {selectedHotspot.locId}
            </p>
            <p className="text-gray-600">Latitude: {selectedHotspot.lat}</p>
            <p className="text-gray-600">Longitude: {selectedHotspot.lng}</p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${selectedHotspot.lat},${selectedHotspot.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-green-500 text-white font-bold rounded-md shadow-md hover:bg-green-600"
            >
              View on Google Maps
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default NearbyHotspots
