import { Metadata } from 'next'
import BlogContent from '@/components/BlogContent'
import Navigation from '@/components/Navigation'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Real Estate SEO Blog - Workflow Champions',
  description: 'Stay updated with the latest real estate SEO strategies, tips, and insights. Learn how to improve your online presence and attract more clients.',
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: 'https://workflowchampions.com/blog'
  }
}

export default function Blog() {
  return <BlogContent />
} 