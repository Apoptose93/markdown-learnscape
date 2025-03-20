
import React from 'react'
import { useParams } from 'react-router-dom'
import MarkdownRenderer from '../components/MarkdownRenderer'

const TopicPage = () => {
  const { topic } = useParams<{ topic: string }>()
  
  // Handle cases where topic might include a path
  let markdownPath = ''
  
  if (topic?.includes('/')) {
    // For nested paths like 'certifications/az-900'
    markdownPath = `./content/topics/${topic}.md`
  } else {
    // For regular topics
    markdownPath = `./content/topics/${topic}.md`
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <MarkdownRenderer markdownPath={markdownPath} />
    </div>
  )
}

export default TopicPage
