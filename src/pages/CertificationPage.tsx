
import React from 'react'
import { useParams } from 'react-router-dom'
import MarkdownRenderer from '../components/MarkdownRenderer'

const CertificationPage = () => {
  const { cert } = useParams<{ cert: string }>()
  
  return (
    <div className="container mx-auto px-4 py-8">
      <MarkdownRenderer markdownPath={`./content/topics/certifications/${cert}.md`} />
    </div>
  )
}

export default CertificationPage
