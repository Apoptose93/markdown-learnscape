
import React from 'react'
import { Link } from 'react-router-dom'

const topicCards = [
  { 
    title: "Learning", 
    description: "Find general learning resources for Azure.",
    image: "/img/learning.png",
    link: "/topics/learning"
  },
  { 
    title: "Certifications", 
    description: "Explore certification paths and study materials.",
    image: "/img/cert-overview.png",
    link: "/topics/certifications/certifications"
  },
  { 
    title: "Communities", 
    description: "Connect with Azure communities worldwide.",
    image: "/img/communities.png",
    link: "/topics/communities"
  },
  { 
    title: "Security", 
    description: "Learn about Azure security and compliance.",
    image: "/img/security.png",
    link: "/topics/security"
  },
  { 
    title: "Architecture", 
    description: "Resources on building robust Azure architectures.",
    image: "/img/architecture.png",
    link: "/topics/architecture"
  },
  { 
    title: "Costs", 
    description: "Optimize your Azure spending.",
    image: "/img/costs.jpg",
    link: "/topics/costs"
  }
]

const Home = () => {
  return (
    <div className="py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">Azure Learning Hub</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A comprehensive collection of resources to help you master Microsoft Azure
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {topicCards.map((card, index) => (
          <Link 
            key={index}
            to={card.link}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={card.image} 
                alt={card.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}

export default Home
