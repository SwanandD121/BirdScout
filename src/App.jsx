import React from 'react'
import BirdsInfo from './components/BirdsInfo'
import Discover from './components/Discover'
import ReportCrime from './components/ReportCrime'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import HowToUse from './components/HowToUse'

const App = () => {
  return (
    <Router>
      <div className=''>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-to-use" element={<HowToUse />} />
          <Route path="/birds-info" element={<BirdsInfo />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/report-crime" element={<ReportCrime />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App