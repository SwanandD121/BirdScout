// /* eslint-disable no-unused-vars */
// import { useState } from "react"

// const SpeciesInfo = () => {
//   const [speciesName, setSpeciesName] = useState("")
//   const [speciesData, setSpeciesData] = useState(null)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState("")

//   const fetchSpeciesDetails = async () => {
//     if (!speciesName.trim()) {
//       setError("Please enter a species name.")
//       return
//     }

//     setLoading(true)
//     setError("")
//     setSpeciesData(null)

//     try {
//       const response = await fetch(`https://api.ebird.org/v2/ref/taxonomy/ebird?fmt=json`, {
//         headers: {
//           "x-ebirdapitoken": import.meta.env.VITE_EBIRD_API_KEY, // Ensure API key is set
//         },
//       })

//       if (!response.ok) {
//         throw new Error(`Error: ${response.status}`)
//       }

//       const data = await response.json()

//       console.log("Fetched data:", data) // Debugging: See API response in the console

//       // Search for a species matching the entered common name (case-insensitive)
//       const foundSpecies = data.find(
//         (species) =>
//           species.COMMON_NAME.toLowerCase() === speciesName.toLowerCase()
//       )

//       if (!foundSpecies) {
//         setError("No species found. Please check the name.")
//       } else {
//         setSpeciesData(foundSpecies)
//       }
//     } catch (err) {
//       setError("Failed to fetch species details. Check API key and network.")
//       console.error("Fetch error:", err)
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="p-5 md:ml-64 mt-12">
//       <header className="mb-8 space-y-6">
//         <h1 className="text-3xl md:text-4xl font-bold mb-2">Species Search</h1>
//         <p className="text-gray-600">Enter a species name to get its details.</p>
//       </header>

//       <div className="space-y-4">
//         <input
//           type="text"
//           placeholder="Enter species common name (e.g. 'Iceland Gull')"
//           value={speciesName}
//           onChange={(e) => setSpeciesName(e.target.value)}
//           className="w-full p-2 shadow-md border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//         />
//         <button
//           onClick={fetchSpeciesDetails}
//           className="p-2 shadow-md border bg-blue-500 text-white hover:bg-blue-600 rounded-md font-bold w-full sm:w-auto"
//         >
//           Search
//         </button>
//       </div>

//       {loading && <p className="text-blue-500 mt-4">Loading species details...</p>}
//       {error && <p className="text-red-500 mt-4">{error}</p>}

//       {speciesData && (
//         <div className="mt-6 p-4 shadow-md border border-gray-300 rounded-md">
//           <h3 className="text-xl font-semibold">{speciesData.COMMON_NAME}</h3>
//           <p className="text-gray-600">Scientific Name: {speciesData.SCIENTIFIC_NAME}</p>
//           <p className="text-gray-600">Species Code: {speciesData.SPECIES_CODE}</p>
//           <p className="text-gray-600">Category: {speciesData.CATEGORY}</p>
//           <p className="text-gray-600">Taxon Order: {speciesData.TAXON_ORDER}</p>
//           <p className="text-gray-600">Common Name Codes: {speciesData.COM_NAME_CODES}</p>
//           <p className="text-gray-600">Scientific Name Codes: {speciesData.SCI_NAME_CODES}</p>
//           <p className="text-gray-600">Banding Codes: {speciesData.BANDING_CODES}</p>
//           <p className="text-gray-600">Order: {speciesData.ORDER}</p>
//           <p className="text-gray-600">Family (Common Name): {speciesData.FAMILY_COM_NAME}</p>
//           <p className="text-gray-600">Family (Scientific Name): {speciesData.FAMILY_SCI_NAME}</p>
//           <p className="text-gray-600">Report As: {speciesData.REPORT_AS}</p>
//           <p className="text-gray-600">
//             Extinct: {speciesData.EXTINCT ? "Yes" : "No"}
//           </p>
//           {speciesData.EXTINCT_YEAR && (
//             <p className="text-gray-600">Extinct Year: {speciesData.EXTINCT_YEAR}</p>
//           )}
//         </div>
//       )}
//     </div>
//   )
// }

// export default SpeciesInfo
