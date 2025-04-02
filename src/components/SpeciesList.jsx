import { useState } from "react"
import Button from "./Button"

const SpeciesListByRegion = () => {
  const [regionCode, setRegionCode] = useState("")
  const [speciesList, setSpeciesList] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const fetchSpeciesList = async () => {
    if (!regionCode.trim()) {
      setError("Please enter a valid region code.")
      return
    }

    setLoading(true)
    setError("")
    setSpeciesList([])

    try {
      const speciesResponse = await fetch(
        `https://api.ebird.org/v2/product/spplist/${regionCode}`,
        {
          headers: {
            "x-ebirdapitoken": import.meta.env.VITE_EBIRD_API_KEY,
          },
        }
      )

      if (!speciesResponse.ok) {
        throw new Error(`Error: ${speciesResponse.status}`)
      }

      const speciesCodes = await speciesResponse.json()

      if (speciesCodes.length === 0) {
        setError("No species found for this region.")
        setLoading(false)
        return
      }

      const taxonomyResponse = await fetch(
        "https://api.ebird.org/v2/ref/taxonomy/ebird?fmt=json",
        {
          headers: {
            "x-ebirdapitoken": import.meta.env.VITE_EBIRD_API_KEY,
          },
        }
      )

      if (!taxonomyResponse.ok) {
        throw new Error(`Error: ${taxonomyResponse.status}`)
      }

      const taxonomyData = await taxonomyResponse.json()

      const matchedSpecies = speciesCodes.map((code) => {
        const species = taxonomyData.find((entry) => entry.speciesCode === code)
        return species ? species.comName : code
      })

      setSpeciesList(matchedSpecies)
    } catch (err) {
      setError("Failed to fetch species list. Check API key and network.")
      console.error("Fetch error:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="flex-1 p-5 md:ml-64 mt-12 max-w-4xl mx-auto w-full">
        <header className="mb-8 space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Species in a Region</h1>
          <p className="text-gray-600">Enter a region code to get a list of species observed there.</p>
        </header>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter region code (e.g., US-NY, IN-MH)"
            value={regionCode}
            onChange={(e) => setRegionCode(e.target.value)}
            className="w-full p-2 shadow-md border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
          <Button onClick={fetchSpeciesList} text="Search" />
        </div>

        {loading && <p className="text-blue-500 mt-4">Loading species list...</p>}
        {error && <p className="text-red-500 mt-4">{error}</p>}

        {speciesList.length > 0 && (
          <div className="mt-6 p-4 shadow-md border border-gray-300 rounded-md">
            <h3 className="text-xl font-semibold">Species Observed in {regionCode.toUpperCase()}</h3>
            <ul className="list-disc pl-6 mt-4 space-y-1">
              {speciesList.map((speciesName, index) => (
                <li key={index} className="text-gray-700">{speciesName}</li>
              ))}
            </ul>
          </div>
        )}
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

export default SpeciesListByRegion