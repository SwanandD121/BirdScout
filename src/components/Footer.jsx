const Footer = () => {
  return (
    <div>
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
  );
};

export default Footer;
