
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img src="/img/home.png" alt="Logo" className="h-8 w-8 mr-2" />
            <span className="text-xl font-semibold text-gray-800">Azure Learning Hub</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/topics/certifications/certifications" className="text-gray-600 hover:text-gray-900">Certifications</Link>
            <Link to="/topics/security" className="text-gray-600 hover:text-gray-900">Security</Link>
            <Link to="/topics/architecture" className="text-gray-600 hover:text-gray-900">Architecture</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
