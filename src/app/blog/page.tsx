import { Metadata } from 'next'
import BlogContent from '@/components/BlogContent'

export const metadata: Metadata = {
  title: 'Blog | Real Estate SEO Insights',
  description: 'Expert advice and strategies for dominating real estate search rankings.',
  robots: {
    index: false,
    follow: false,
  }
}

export default function Blog() {
  return <BlogContent />
} 