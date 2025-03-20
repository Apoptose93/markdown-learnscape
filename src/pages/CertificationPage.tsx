
import React from 'react'
import { useParams } from 'react-router-dom'
import MarkdownRenderer from '../components/MarkdownRenderer'

const CertificationPage = () => {
  const { cert } = useParams<{ cert: string }>()
  
  return (
    <div>
      <MarkdownRenderer markdownPath={`/topics/certifications/${cert}.md`} />
    </div>
  )
}

export default CertificationPage
