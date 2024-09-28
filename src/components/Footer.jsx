import React from 'react'

const Footer = () => {
  return (
    <div>
        {/* Footer Section */}
        <footer className="bg-gray-200 h-40 m-0 p-0">
          <div className="flex justify-between">
            <p className="text-gray-600">© 2024 BirdScout. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-lime-600 hover:underline">Privacy Policy</a>
              <a href="#" className="text-lime-600 hover:underline">Terms of Service</a>
              <a href="#" className="text-lime-600 hover:underline">Contact Us</a>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer