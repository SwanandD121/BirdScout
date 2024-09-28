// Sidebar.jsx
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from './Button'
import birdscoutlogo from "../assets/birdscout-logo-2.png"

const Sidebar = () => {
  const location = useLocation();

  return (
    <div>
      <div className="fixed h-full bg-lime-200 p-5 flex flex-col justify-between">
        <div className='h-full'>
          <div className="mb-8">
            <img src={birdscoutlogo} alt="" height={60} width={60}/>
          </div>
          <nav className='h-5/6'>
            <div className="space-y-4 h-full ml-2 flex flex-col items-start">
              <div className='flex flex-col gap-4'>
                <Link to="/">
                  <Button text="Home" isActive={location.pathname === '/'} />
                </Link>
                <Link to="/how-to-use">
                  <Button text="How to Use" isActive={location.pathname === '/how-to-use'} />
                </Link>
                {/* <Link to="/birds-info">
                  <Button text="Birds Info" isActive={location.pathname === '/birds-info'} />
                </Link> */}
                <Link to="/discover">
                  <Button text="Discover" isActive={location.pathname === '/discover'} />
                </Link>
                <Link to="/report-crime">
                  <Button text="Report Wildlife Crime" isActive={location.pathname === '/report-crime'} />
                </Link>
              </div>
              <div>
                <Button text="Log Out" isActive={false} />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
