
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="prose max-w-none">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to Azure Learning Hub</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link to="/topics/certifications/certifications" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
          <p className="text-gray-600">Explore Azure certification paths and preparation resources.</p>
        </Link>
        
        <Link to="/topics/security" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Security</h2>
          <p className="text-gray-600">Learn about Azure security best practices and tools.</p>
        </Link>
        
        <Link to="/topics/architecture" className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Architecture</h2>
          <p className="text-gray-600">Discover Azure architecture patterns and guidelines.</p>
        </Link>
      </div>
    </div>
  )
}

export default Home
