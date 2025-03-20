
import React from 'react'
import { useParams } from 'react-router-dom'
import MarkdownRenderer from '../components/MarkdownRenderer'

const ProductPage = () => {
  const { product } = useParams<{ product: string }>()
  
  return (
    <div className="container mx-auto px-4 py-8">
      <MarkdownRenderer markdownPath={`./content/products/${product}.md`} />
    </div>
  )
}

export default ProductPage
