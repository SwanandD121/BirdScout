/* eslint-disable no-unused-vars */
import { useState } from "react"
import Sidebar from "./Sidebar"
import Button from "./Button"

const RecentObservations = () => {
  const [regionCode, setRegionCode] = useState("")
  const [observations, setObservations] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const fetchObservations = async () => {
    if (!regionCode) {
      setError("Please enter a region code.")
      return
    }

    setLoading(true)
    setError("")

    try {
      const response = await fetch(
        `https://api.ebird.org/v2/data/obs/${regionCode}/recent?maxResults=10`,
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
      setObservations(data)
    } catch (err) {
      setError("Failed to fetch observations. Please check the region code.")
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
        <header className="mb-8 space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Recent Bird Observations
          </h1>
          <p className="text-gray-600">
            Enter a region code to get the latest bird observations.
          </p>
        </header>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter region code"
            value={regionCode}
            onChange={(e) => setRegionCode(e.target.value)}
            className="w-full p-2 shadow-md border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
          <Button onClick={fetchObservations} text="Search" />
        </div>

        {loading && (
          <p className="text-blue-500 mt-4">Loading observations...</p>
        )}
        {error && <p className="text-red-500 mt-4">{error}</p>}

        <ul className="mt-6 space-y-4">
          {observations.map((obs, index) => (
            <li
              key={index}
              className="p-4 shadow-md border border-gray-300 rounded-md"
            >
              <h3 className="text-lg font-semibold">{obs.comName}</h3>
              <p className="text-gray-600">Scientific Name: {obs.sciName}</p>
              <p className="text-gray-600">Location: {obs.locName}</p>
              <p className="text-gray-600">Date: {obs.obsDt}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Sidebar */}
      <div className="fixed right-0 top-0 h-screen w-full md:w-1/4 bg-gray-100 p-5 overflow-y-auto hidden md:block">
        <div className="mb-8 space-y-4">
          <h3 className="text-xl font-semibold">Birdwatching Matters</h3>
          <p className="text-gray-600">Your contributions help track bird populations and biodiversity.</p>
        </div>

        
      </div>
    </div>
  )
}

export default RecentObservations
