
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">Azure Learning Hub - A community-driven collection of resources</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Contribute
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
