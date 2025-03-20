
import React from 'react'
import MarkdownRenderer from '../components/MarkdownRenderer'

const CodeOfConductPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <MarkdownRenderer markdownPath="./content/code-of-conduct.md" />
    </div>
  )
}

export default CodeOfConductPage
