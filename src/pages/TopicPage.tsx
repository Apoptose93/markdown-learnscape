
import React from 'react'
import { useParams } from 'react-router-dom'
import MarkdownRenderer from '../components/MarkdownRenderer'

const TopicPage = () => {
  const { topic } = useParams<{ topic: string }>()
  
  // Handle cases where topic might include a path
  let markdownPath = ''
  
  if (topic?.includes('/')) {
    // For nested paths like 'certifications/az-900'
    markdownPath = `/topics/${topic}.md`
  } else {
    // For regular topics
    markdownPath = `/topics/${topic}.md`
  }

  return (
    <div>
      <MarkdownRenderer markdownPath={markdownPath} />
    </div>
  )
}

export default TopicPage
