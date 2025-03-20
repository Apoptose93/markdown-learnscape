
import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import TopicPage from './pages/TopicPage'
import ProductPage from './pages/ProductPage'
import CertificationPage from './pages/CertificationPage'

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics/:topic" element={<TopicPage />} />
          <Route path="/products/:product" element={<ProductPage />} />
          <Route path="/certifications/:cert" element={<CertificationPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
