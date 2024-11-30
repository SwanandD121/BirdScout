
import Sidebar from './Sidebar';
import hornbill from '../assets/birds/hornbill.jpg'; // Image for Step 1
import gbe from '../assets/birds/gbe.jpg'; // Image for Step 1
import pitta from '../assets/birds/pitta.jpg'; // Image for Step 1
import ruddy from '../assets/birds/ruddy.jpg'; // Image for Step 1

const HowToUse = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 md:ml-64">
        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 px-6 md:px-20 pt-20 text-center md:text-left">
          How to Use BirdScout
        </h1>

        {/* Step 1 */}
        <section className="flex flex-col md:flex-row items-center mb-12 px-6 md:px-20">
          <img
            src={gbe}
            alt="Step 1"
            className="w-full md:w-1/2 h-64 md:h-80 object-cover rounded-lg shadow-md"
          />
          <div className="mt-6 md:mt-0 md:ml-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Step 1: Capture Your Sighting</h2>
            <p className="text-base sm:text-lg text-gray-600">
              Take a clear photo of the bird you want to identify. Make sure the bird is centered and visible to ensure better accuracy in the identification process.
            </p>
          </div>
        </section>

        {/* Step 2 */}
        <section className="flex flex-col-reverse md:flex-row items-center mb-12 px-6 md:px-20">
          <div className="mt-6 md:mt-0 md:mr-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Step 2: Upload the Photo</h2>
            <p className="text-base sm:text-lg text-gray-600">
              Navigate to the &#8220;Identify Your Sighting&#8221; page and upload the photo you just captured. BirdScout accepts most common image formats (JPG, PNG).
            </p>
          </div>
          <img
            src={hornbill}
            alt="Step 2"
            className="w-full md:w-1/2 h-64 md:h-80 object-cover rounded-lg shadow-md"
          />
        </section>

        {/* Step 3 */}
        <section className="flex flex-col md:flex-row items-center mb-12 px-6 md:px-20">
          <img
            src={pitta}
            alt="Step 3"
            className="w-full md:w-1/2 h-64 md:h-80 object-cover rounded-lg shadow-md"
          />
          <div className="mt-6 md:mt-0 md:ml-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Step 3: Let the AI Work</h2>
            <p className="text-base sm:text-lg text-gray-600">
              Once you upload your photo, our advanced machine learning model will analyze the image and predict the bird species. This typically takes a few seconds, depending on your internet connection.
            </p>
          </div>
        </section>

        {/* Step 4 */}
        <section className="flex flex-col-reverse md:flex-row items-center mb-12 px-6 md:px-20">
          <div className="mt-6 md:mt-0 md:mr-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Step 4: Get Results and Learn More</h2>
            <p className="text-base sm:text-lg text-gray-600">
              After the identification is complete, you&#8216;ll receive the bird species name along with additional information, including habitat, behavior, and conservation status.
            </p>
          </div>
          <img
            src={ruddy}
            alt="Step 4"
            className="w-full md:w-1/2 h-64 md:h-80 object-cover rounded-lg shadow-md"
          />
        </section>

        {/* Conclusion */}
        <section className="text-center mt-12 px-6 md:px-20">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">That&#8216;s It!</h2>
          <p className="text-base sm:text-lg text-gray-600">
            You can now explore and document bird species wherever you go. Enjoy your birdwatching experience with BirdScout!
          </p>
        </section>

        {/* Footer Section */}
        <footer className="bg-gray-200 p-6 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600">© 2024 BirdScout. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-lime-600 hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="text-lime-600 hover:underline">
                Terms of Service
              </a>
              <a href="#" className="text-lime-600 hover:underline">
                Contact Us
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HowToUse;
