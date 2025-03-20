
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold flex items-center">
            <img src="/img/home.png" alt="Home" className="w-6 h-6 mr-2" />
            Azure Learning Hub
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
            <Link to="/topics/learning" className="hover:text-blue-200 transition-colors">Learning</Link>
            <Link to="/topics/certifications/certifications" className="hover:text-blue-200 transition-colors">Certifications</Link>
            <Link to="/topics/communities" className="hover:text-blue-200 transition-colors">Communities</Link>
            <Link to="/topics/security" className="hover:text-blue-200 transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
