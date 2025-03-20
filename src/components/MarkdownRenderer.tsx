
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface MarkdownRendererProps {
  markdownPath: string
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ markdownPath }) => {
  const [content, setContent] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(markdownPath)
        if (!response.ok) {
          throw new Error(`Failed to fetch markdown: ${response.status}`)
        }
        const text = await response.text()
        
        // Process the markdown content to fix relative image paths
        const processedContent = text.replace(
          /!\[([^\]]*)\]\(\/img\/([^)]*)\)/g, 
          '![$1](./img/$2)'
        )
        
        setContent(processedContent)
        setError(null)
      } catch (err) {
        console.error('Error fetching markdown:', err)
        setError('Failed to load content. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchMarkdown()
  }, [markdownPath])

  if (isLoading) {
    return <div className="flex justify-center py-12"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div></div>
  }

  if (error) {
    return <div className="text-red-500 p-4 bg-red-50 rounded-md">{error}</div>
  }

  return (
    <div className="markdown-content prose lg:prose-xl max-w-none">
      <ReactMarkdown
        components={{
          code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                style={vscDarkPlus}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}

export default MarkdownRenderer
