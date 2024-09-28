import React from "react";

const BirdsInfo = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-green-100 p-6">
        <div className="flex items-center mb-6">
          <img src="/feather-icon.png" alt="feather icon" className="h-8 w-8" />
          <h1 className="ml-2 text-2xl font-bold">BirdScout Discover</h1>
        </div>
        <ul>
          {/* Course List */}
          <li className="bg-green-200 p-4 mb-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <img
                src="/binoculars.jpg"
                alt="Bird Identification Tips"
                className="h-20 w-20 rounded-md"
              />
              <div className="ml-4">
                <h3 className="font-bold text-lg">Bird Identification Tips</h3>
                <p className="text-gray-600">Birdwatching Expert</p>
                <div className="mt-2 w-full bg-gray-300 rounded-full h-1.5">
                  <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '82%' }}></div>
                </div>
                <p className="text-gray-600 text-sm mt-1">82% complete</p>
              </div>
              <div className="ml-auto">
                <button className="bg-gray-100 p-2 rounded-full shadow-md">🔖</button>
              </div>
            </div>
          </li>
          <li className="bg-white p-4 mb-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <img
                src="/photography.jpg"
                alt="Bird Photography"
                className="h-20 w-20 rounded-md"
              />
              <div className="ml-4">
                <h3 className="font-bold text-lg">Bird Photography</h3>
                <p className="text-gray-600">Nature Photographer</p>
                <div className="mt-2 w-full bg-gray-300 rounded-full h-1.5">
                  <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '53%' }}></div>
                </div>
                <p className="text-gray-600 text-sm mt-1">53% complete</p>
              </div>
              <div className="ml-auto">
                <button className="bg-gray-100 p-2 rounded-full shadow-md">🔖</button>
              </div>
            </div>
          </li>
          <li className="bg-white p-4 mb-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <img
                src="/nest.jpg"
                alt="Bird Species Database"
                className="h-20 w-20 rounded-md"
              />
              <div className="ml-4">
                <h3 className="font-bold text-lg">Bird Species Database</h3>
                <p className="text-gray-600">Ornithologist</p>
                <div className="mt-2 w-full bg-gray-300 rounded-full h-1.5">
                  <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '36%' }}></div>
                </div>
                <p className="text-gray-600 text-sm mt-1">36% complete</p>
              </div>
              <div className="ml-auto">
                <button className="bg-gray-100 p-2 rounded-full shadow-md">🔖</button>
              </div>
            </div>
          </li>
          <li className="bg-white p-4 mb-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <img
                src="/bird-portrait.jpg"
                alt="Bird Portrait Techniques"
                className="h-20 w-20 rounded-md"
              />
              <div className="ml-4">
                <h3 className="font-bold text-lg">Bird Portrait Techniques</h3>
                <p className="text-gray-600">Avian Photographer</p>
                <div className="mt-2 w-full bg-gray-300 rounded-full h-1.5">
                  <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '68%' }}></div>
                </div>
                <p className="text-gray-600 text-sm mt-1">68% complete</p>
              </div>
              <div className="ml-auto">
                <button className="bg-gray-100 p-2 rounded-full shadow-md">🔖</button>
              </div>
            </div>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 bg-white p-6">
        <div className="relative">
          <img
            src="/bird.jpg"
            alt="Bird Species"
            className="w-full h-80 object-cover rounded-md shadow-md"
          />
          <div className="absolute bottom-0 left-0 p-4 bg-opacity-50 bg-white rounded-md">
            <h3 className="text-2xl font-bold">Identifying Bird Species</h3>
            <div className="flex items-center">
              <img
                src="/profile.jpg"
                alt="User Avatar"
                className="h-8 w-8 rounded-full mr-2"
              />
              <p className="text-gray-600">Bird</p>
            </div>
            <p className="text-gray-600 mt-1">15m</p>
            <p className="text-yellow-500 mt-1">★ 4.9/5.0</p>
            <p className="text-gray-600 mt-2">
              Bird Identification Course - This course is designed to help you
              easily identify different bird species and enhance your
              birdwatching experience.
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <button className="bg-white text-black font-bold py-2 px-4 border-2 border-black rounded-md">
            EXPLORE COURSE
          </button>
          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-md">
            CONTINUE LEARNING
          </button>
        </div>
      </div>
    </div>
  );
};

export default BirdsInfo;

// BLACKBOX:
// import React from 'react';

// const BirdsInfo = () => {
//   return (
//     <div className="flex bg-gray-100 p-4">
//       {/* Left Side - Course List */}
//       <div className="w-1/3 bg-green-100 p-4 rounded-lg mr-4">
//         <h2 className="text-2xl font-semibold mb-4">BirdScout Discover</h2>
//         {/* Course Card 1 */}
//         <div className="bg-white p-4 rounded-md shadow-md mb-4">
//           <img
//             src="https://via.placeholder.com/150" // Replace with actual image URL
//             alt="Binoculars"
//             className="w-full h-40 object-cover rounded-md mb-2"
//           />
//           <h3 className="text-lg font-medium">Bird Identification Tips</h3>
//           <p className="text-gray-600 text-sm">Birdwatching Expert</p>
//           <div className="w-full bg-gray-200 rounded-full mt-2">
//             <div className="bg-green-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '82%' }}>
//               82% complete
//             </div>
//           </div>
//         </div>
//         {/* Course Card 2 */}
//         <div className="bg-white p-4 rounded-md shadow-md mb-4">
//           <img
//             src="https://via.placeholder.com/150" // Replace with actual image URL
//             alt="Nature"
//             className="w-full h-40 object-cover rounded-md mb-2"
//           />
//           <h3 className="text-lg font-medium">Bird Photography</h3>
//           <p className="text-gray-600 text-sm">Nature Photographer</p>
//           <div className="w-full bg-gray-200 rounded-full mt-2">
//             <div className="bg-green-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '53%' }}>
//               53% complete
//             </div>
//           </div>
//         </div>
//         {/* Course Card 3 */}
//         <div className="bg-white p-4 rounded-md shadow-md mb-4">
//           <img
//             src="https://via.placeholder.com/150" // Replace with actual image URL
//             alt="Bird Nest"
//             className="w-full h-40 object-cover rounded-md mb-2"
//           />
//           <h3 className="text-lg font-medium">Bird Species Database</h3>
//           <p className="text-gray-600 text-sm">Ornithologist</p>
//           <div className="w-full bg-gray-200 rounded-full mt-2">
//             <div className="bg-green-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '36%' }}>
//               36% complete
//             </div>
//           </div>
//         </div>
//         {/* Course Card 4 */}
//         <div className="bg-white p-4 rounded-md shadow-md">
//           <img
//             src="https://via.placeholder.com/150" // Replace with actual image URL
//             alt="Bird Portrait"
//             className="w-full h-40 object-cover rounded-md mb-2"
//           />
//           <h3 className="text-lg font-medium">Bird Portrait Techniques</h3>
//           <p className="text-gray-600 text-sm">Avian Photographer</p>
//           <div className="w-full bg-gray-200 rounded-full mt-2">
//             <div className="bg-green-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '68%' }}>
//               68% complete
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right Side - Featured Course */}
//       <div className="w-2/3">
//         <img
//           src="https://via.placeholder.com/7 " // Replace with actual image URL
//           alt="BirdScout Logo"
//           className="w-1/2 h-20 object-cover rounded-md mb-4"
//         />
//         <h2 className="text-2xl font-semibold mb-4">Featured Course</h2>
//         <h3 className="text-lg font-medium">Bird Identification Masterclass</h3>
//         <p className="text-gray-600 text-sm">Learn the art of identifying birds with our expert-led course.</p>
//         <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md">
//           Enroll Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BirdsInfo;


// CLAUDE
// import React from 'react';
// // import { Bookmark, Moon, Star } from 'lucide-react';

// const BirdsInfo = () => {
//   return (
//     <div className="flex bg-green-50 p-4 font-sans">
//       <div className="w-1/2 pr-4">
//         <div className="flex items-center justify-between mb-4">
//           <div className="flex items-center">
//             <div className="w-6 h-6 bg-green-700 rounded-md mr-2"></div>
//             <h1 className="text-2xl font-bold">BirdScout Discover</h1>
//           </div>
//           <div className="flex items-center">
//             <div className="border border-gray-300 p-1 rounded">
//               <div className="w-6 h-6 flex justify-center items-center">
//                 <div className="w-4 h-3 border-t-2 border-l-2 border-r-2 border-gray-600"></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="space-y-4">
//           {[
//             { title: 'Bird Identification Tips', role: 'Birdwatching Expert', progress: 82, image: '/api/placeholder/100/100' },
//             { title: 'Bird Photography', role: 'Nature Photographer', progress: 53, image: '/api/placeholder/100/100' },
//             { title: 'Bird Species Database', role: 'Ornithologist', progress: 36, image: '/api/placeholder/100/100' },
//             { title: 'Bird Portrait Techniques', role: 'Avian Photographer', progress: 68, image: '/api/placeholder/100/100' },
//           ].map((item, index) => (
//             <div key={index} className="bg-white rounded-lg p-3 flex items-center">
//               <img src={item.image} alt="" className="w-16 h-16 rounded-lg mr-3 object-cover" />
//               <div className="flex-grow">
//                 <div className="flex justify-between items-center mb-1">
//                   <h3 className="font-semibold">{item.title}</h3>
//                   {/* <Bookmark size={16} /> */}
//                 </div>
//                 <p className="text-sm text-gray-600">{item.role}</p>
//                 <div className="mt-2 bg-gray-200 h-2 rounded-full">
//                   <div className="bg-gray-400 h-full rounded-full" style={{ width: `${item.progress}%` }}></div>
//                 </div>
//                 <p className="text-xs text-gray-500 mt-1">{item.progress}% complete</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="w-1/2 pl-4">
//         <img src="/api/placeholder/600/400" alt="Bird on a branch" className="w-full rounded-lg mb-4" />
//         <h2 className="text-xl font-bold mb-2">Identifying Bird Species</h2>
//         <div className="flex items-center mb-4">
//           <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
//           <span className="mr-4">Bird</span>
//           <div className="flex items-center mr-4">
//             {/* <Moon size={16} className="mr-1" /> */}
//             <span>15m</span>
//           </div>
//           <div className="flex items-center">
//             {/* <Star size={16} className="mr-1" /> */}
//             <span>4.9/5.0</span>
//           </div>
//         </div>
//         <h3 className="font-semibold mb-2">Bird Identification Course</h3>
//         <p className="text-sm text-gray-600 mb-4">
//           This course is designed to help you easily identify different bird species and enhance your birdwatching experience.
//         </p>
//         <div className="flex space-x-4">
//           <button className="flex-1 border border-gray-300 py-2 rounded">EXPLORE COURSE</button>
//           <button className="flex-1 bg-green-500 text-white py-2 rounded">CONTINUE LEARNING</button>
//         </div>
//       </div>
      
//       <div className="absolute bottom-4 left-4">
//         {/* <Moon size={24} /> */}
//       </div>
//     </div>
//   );
// };

// export default BirdsInfo;