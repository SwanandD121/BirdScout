import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import Button from "./Button"
import birdscoutlogo from "../assets/logo.png"

const Sidebar = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      {/* Hamburger Menu for Small Screens */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <button
          className="p-2 bg-lime-200 rounded-lg shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-lime-200 p-5 z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-64`}
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="mb-8 md:flex md:justify-start flex justify-end">
              <img src={birdscoutlogo} alt="Logo" height={50} width={40} />
            </div>
            <nav>
              <div className="space-y-4 flex flex-col ">
                <Link to="/">
                  <Button text="Home" isActive={location.pathname === "/"} />
                </Link>
                <Link to="/how-to-use">
                  <Button
                    text="How to Use"
                    isActive={location.pathname === "/how-to-use"}
                  />
                </Link>
                <Link to="/discover">
                  <Button
                    text="Discover"
                    isActive={location.pathname === "/discover"}
                  />
                </Link>
                <Link to="/report-crime">
                  <Button
                    text="Report Wildlife Crime"
                    isActive={location.pathname === "/report-crime"}
                  />
                </Link>
              </div>
            </nav>
          </div>
          <div>
            <Button text="Log Out" isActive={false} />
          </div>
        </div>
      </div>

      {/* Overlay for Mobile Sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  )
}

export default Sidebar
