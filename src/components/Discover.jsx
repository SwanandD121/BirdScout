import Button from './Button';
import hornbill from '../assets/birds/hornbill.jpg';
import peafowl from '../assets/birds/peafowl.jpg';
import babbler from '../assets/birds/babbler.jpg';
import hoopoe from '../assets/birds/hoopoe.jpg';
import sarus from '../assets/birds/sarus.jpg';
import cattleegret from '../assets/birds/cattle-egret.jpg';
import commonkingfisher from '../assets/birds/common-kingfisher.jpg';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Discover = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 p-6 lg:p-8 overflow-x-hidden mt-12">
        <header className="mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold mb-2">Welcome to BirdScout!</h1>
          <p className="text-base lg:text-lg text-gray-600">Explore Nature</p>
        </header>

        <section className="mb-12">
          <h2 className="text-xl lg:text-2xl font-semibold mb-4">Discover bird species</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
            <img
              src={babbler}
              alt="Babbler"
              className="w-full h-48 md:h-60 lg:h-72 object-cover rounded-lg hover:scale-105 hover:cursor-pointer transition-all ease-in"
            />
            <img
              src={peafowl}
              alt="Peafowl"
              className="w-full h-48 md:h-60 lg:h-72 object-cover rounded-lg hover:scale-105 hover:cursor-pointer transition-all ease-in"
            />
            <img
              src={hoopoe}
              alt="Hoopoe"
              className="w-full h-48 md:h-60 lg:h-72 object-cover rounded-lg hover:scale-105 hover:cursor-pointer transition-all ease-in"
            />
            <img
              src={hornbill}
              alt="Hornbill"
              className="w-full h-48 md:h-60 lg:h-72 object-cover rounded-lg hover:scale-105 hover:cursor-pointer transition-all ease-in"
            />
          </div>
          <Button text="Explore More" />
        </section>

        <section className="gap-8 lg:gap-12 grid grid-cols-1 lg:grid-cols-2">
          <div className="col-span-1 bg-lime-200 p-4 rounded-lg">
            <h3 className="text-lg lg:text-xl font-semibold mb-4">Test Your Bird Knowledge</h3>
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
              <img
                src={cattleegret}
                alt="Cattle Egret"
                className="w-full lg:w-48 h-48 lg:h-72 object-cover rounded-lg"
              />
              <div className="flex flex-col gap-4">
                <p className="text-base lg:text-lg font-semibold">Cattle Egret</p>
                <p className="text-sm lg:text-base text-gray-600">
                  What are 3 most common types of Egret species found in India?
                </p>
                <Button text="Start Quiz" />
              </div>
            </div>
          </div>

          <div className="col-span-1 bg-lime-200 p-4 rounded-lg">
            <h3 className="text-lg lg:text-xl font-semibold mb-4">Today&#8216;s Featured Bird</h3>
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4">
              <img
                src={commonkingfisher}
                alt="Common Kingfisher"
                className="w-full lg:w-48 h-48 lg:h-72 object-cover rounded-lg"
              />
              <div className="flex flex-col gap-4">
                <p className="text-base lg:text-lg font-semibold">Common Kingfisher</p>
                <p className="text-sm lg:text-base text-gray-600">Birds favorite foods</p>
                <Button text="More Info" />
              </div>
            </div>
          </div>
        </section>
        
      </div>

      {/* Right Sidebar */}
      <div className="lg:w-1/6 bg-gray-100 p-5 hidden lg:block">
        <div className="mb-8 flex flex-col gap-2">
          <h3 className="text-lg lg:text-xl font-semibold mb-2">Bird of the Day</h3>
          <img
            src={sarus}
            alt="Sarus Crane"
            className="rounded-lg hover:scale-105 transition-all ease-in hover:cursor-pointer"
          />
          <p className="text-sm lg:text-base text-gray-600 mb-2">Sarus Crane</p>
        </div>
        <div className="mb-8 flex flex-col gap-2">
          <h3 className="text-lg lg:text-xl font-semibold mb-2">Identify Birds with a Snap!</h3>
          <Button text="Start Here" />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Discover;
