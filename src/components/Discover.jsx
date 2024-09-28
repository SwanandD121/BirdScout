import React from 'react'
import Button from './Button'
import hornbill from "../assets/birds/hornbill.jpg"
import peafowl from "../assets/birds/peafowl.jpg"
import babbler from "../assets/birds/babbler.jpg"
import hoopoe from "../assets/birds/hoopoe.jpg"
import sarus from "../assets/birds/sarus.jpg"
import cattleegret from "../assets/birds/cattle-egret.jpg"
import commonkingfisher from "../assets/birds/common-kingfisher.jpg"
import Sidebar from './Sidebar'


const Discover = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64 p-8  overflow-x-hidden">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome to BirdScout!</h1>
          <p className="text-lg text-gray-600">Explore Nature</p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Discover bird species</h2>
          <div className="grid grid-cols-4 gap-4 mb-4">
            <img src={babbler} alt="Owl" className="w-full h-72 rounded-lg hover:scale-105 hover:cursor-pointer transition-all ease-in" />
            <img src={peafowl} alt="Parrot" className="w-full h-72 rounded-lg hover:scale-105 hover:cursor-pointer transition-all ease-in" />
            <img src={hoopoe} alt="Egret" className="w-full h-72 rounded-lg hover:scale-105 hover:cursor-pointer transition-all ease-in" />
            <img src={hornbill} alt="Sparrow" className="w-full h-72 rounded-lg hover:scale-105 hover:cursor-pointer transition-all ease-in" />
          </div>
          <Button text="Explore More" />
        </section>

        <section className='gap-12 grid grid-cols-2'>
          <div className='col-span-1 bg-lime-200 p-4'>
            <h3 className="text-xl font-semibold mb-4">Test Your Bird Knowledge</h3>
            <div className="flex items-center space-x-4">
              <img src={cattleegret} alt="Sparrow" className="w-48 h-72 rounded-lg" />
              <div className='flex flex-col gap-4'>
                <p className="text-lg font-semibold">Cattle Egret</p>
                <p className="text-gray-600">What are 3 most common types of Egret species found in India?</p>
                <Button text={"Start Quiz"}/>
              </div>
            </div>
          </div>

          <div className='col-span-1 bg-lime-200 p-4'> 
            <h3 className="text-xl font-semibold mb-4">Today's featured bird</h3>
            <div className="flex items-center space-x-4">
              <img src={commonkingfisher} alt="Sparrow" className="w-48 h-72 rounded-lg" />
              <div className='flex flex-col gap-4'>
                <p className="text-lg font-semibold">Common Kingfisher</p>
                <p className="text-gray-600">Bird's favorite foods</p>
                <Button text={"More Info"}/>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Right Sidebar */}
      <div className="w-1/6 bg-gray-100 p-5">
        <div className="mb-8 flex flex-col gap-2">
          <h3 className="text-xl font-semibold mb-2">Bird of the Day</h3>
          <img src={sarus} alt="" className='rounded-lg hover:scale-105 transition-all ease-in hover:cursor-pointer'/>
          <p className="text-gray-600 mb-2">Sarus Crane</p>
        </div>
        <div className="mb-8 flex flex-col gap-2">
          <h3 className="text-xl font-semibold mb-2">Identify Birds with a Snap!</h3>
          <Button text={"Start Here"}/>
        </div>

        
      </div>
    </div>
  )
}

export default Discover
