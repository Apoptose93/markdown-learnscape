
import React from 'react'
import { useParams } from 'react-router-dom'
import MarkdownRenderer from '../components/MarkdownRenderer'

const ProductPage = () => {
  const { product } = useParams<{ product: string }>()
  
  return (
    <div>
      <MarkdownRenderer markdownPath={`/products/${product}.md`} />
    </div>
  )
}

export default ProductPage
