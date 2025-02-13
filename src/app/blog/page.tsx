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
  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://workflowchampions.com/blog#webpage',
    'url': 'https://workflowchampions.com/blog',
    'name': metadata.title,
    'description': metadata.description,
    'inLanguage': 'en-US',
    'isPartOf': {
      '@type': 'WebSite',
      '@id': 'https://workflowchampions.com/#website'
    },
    'primaryImageOfPage': {
      '@type': 'ImageObject',
      'url': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
      'width': 1200,
      'height': 800
    },
    'mainEntity': {
      '@type': 'Blog',
      'name': 'Real Estate SEO Blog',
      'description': metadata.description,
      'publisher': {
        '@type': 'OnlineBusiness',
        '@id': 'https://workflowchampions.com/#organization',
        'name': 'Workflow Champions',
        'url': 'https://workflowchampions.com',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': '1758 North Rhodes Street Unit 337',
          'addressLocality': 'Arlington',
          'addressRegion': 'VA',
          'postalCode': '22201',
          'addressCountry': 'US'
        }
      }
    },
    'speakable': {
      '@type': 'SpeakableSpecification',
      'cssSelector': ['h1', 'h2', '.blog-post-title']
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema)
        }}
      />
      <BlogContent />
    </>
  )
} 