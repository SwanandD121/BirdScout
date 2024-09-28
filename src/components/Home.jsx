import React from 'react';
import Sidebar from './Sidebar';
import brownheadedbarbet from "../assets/birds/brown-headed-barbet.jpg";  // Your bird image
import sparrow from "../assets/birds/sparrow.jpg"; // Mission section bird image
import teambirds from "../assets/teambirds.jpeg"; // Mission section bird image
import arghya from "../assets/team/arghya.jpg"; // Team members' profile pictures
import khyaat from "../assets/team/khyaat.jpg";
import tejal from "../assets/team/tejal.jpg";
import sparsh from "../assets/team/sparsh.jpg";
import swanand from "../assets/team/swanand.jpg";
import Button from './Button';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex min-h-screen ">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col ml-64">
        {/* Welcome Section */}
        <section className="flex h-screen items-center justify-between mb-12 p-20">
          <div>
            <h1 className="text-7xl font-bold mb-4 ">Welcome to <span className='bg-gradient-to-r from-lime-500 to-green-500 bg-clip-text text-transparent'>BirdScout!</span></h1>
            <p className="text-lg text-gray-600 mb-6">Identify birds using our cutting-edge ML technology.</p>
            
            <Button text="Identify Your Sighting" onClick={() => window.location.href = 'https://en.wikipedia.org/wiki/Peregrine_falcon'} />
          </div>
          <img src={brownheadedbarbet} alt="Bird" className="w-1/2 h-80 object-cover rounded-lg shadow-md" />
        </section>

        {/* Our Mission Section */}
        <section className="h-screen flex items-center p-20 gap-4">
          <img src={sparrow} alt="Bird" className="w-1/2 h-4/5 object-cover rounded-lg shadow-md" />
          <div className="ml-8">
            <h2 className="text-5xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600">At BirdScout, our mission is to empower wildlife enthusiasts and conservationists with the technology to identify, document, and protect bird species across the globe.</p>
          </div>
        </section>

        {/* Our Team Section */}
        <section className=" p-12 flex flex-col items-center mb-36">
          <h2 className="text-5xl font-semibold mb-8 self-center">Our Team</h2>
          <div className='flex flex-col items-center justify-center gap-12'>
            <img src={teambirds} alt="" className='rounded-md  w-2/3'/>
            <div className="flex gap-8">
              {/* Team Member 1 */}
              <div className="flex flex-col items-center">
                <img src={arghya} alt="Team Member 1" className="w-32 h-32 bg-lime-200 p-2 object-cover rounded-full shadow-md mb-4" />
                <p className="font-bold">Arghya Banerjee</p>
                <p className="text-gray-600 mb-2">The Ornithologist</p>
              </div>
              {/* Team Member 2 */}
              <div className="flex flex-col items-center">
                <img src={khyaat} alt="Team Member 2" className="w-32 h-32 bg-lime-200 p-2 object-cover rounded-full shadow-md mb-4" />
                <p className="font-bold">Khyaat Punetha</p>
                <p className="text-gray-600 mb-2">Feather Guru</p>
              </div>
              {/* Team Member 3 */}
              <div className="flex flex-col items-center">
                <img src={tejal} alt="Team Member 3" className="w-32 h-32 bg-lime-200 p-2 object-cover rounded-full shadow-md mb-4" />
                <p className="font-bold">Tejal Bishnoi</p>
                <p className="text-gray-600 mb-2">Bird Whisperer</p>
              </div>
              {/* Team Member 4 */}
              <div className="flex flex-col items-center">
                <img src={sparsh} alt="Team Member 4" className="w-32 h-32 bg-lime-200 p-2 object-cover rounded-full shadow-md mb-4" />
                <p className="font-bold">Sparsh Rajput</p>
                <p className="text-gray-600 mb-2">"Sky Watcher"</p>
              </div>
              {/* Team Member 5 */}
              <div className="flex flex-col items-center">
                <img src={swanand} alt="Team Member 5" className="w-32 h-32 bg-lime-200 p-2 object-cover rounded-full shadow-md mb-4" />
                <p className="font-bold">Swanand Deshpande</p>
                <p className="text-gray-600 mb-2">Wildlife Scout</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-gray-200 h-40 w-full flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-5">
            <div className="flex space-x-4">
              <a href="#" className="text-lime-600 hover:underline">Privacy Policy</a>
              <a href="#" className="text-lime-600 hover:underline">Terms of Service</a>
              <a href="#" className="text-lime-600 hover:underline">Contact Us</a>
            </div>
            <p className="text-gray-600">© 2024 BirdScout. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
