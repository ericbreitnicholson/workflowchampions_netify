import { Metadata } from 'next'
import TermsContent from '@/components/TermsContent'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Terms of Service - Workflow Champions',
  description: 'Read our terms of service to understand the agreement between you and Workflow Champions when using our services.',
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: 'https://workflowchampions.com/terms'
  }
}

export default function Page() {
  const termsSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://workflowchampions.com/terms#webpage',
    'url': 'https://workflowchampions.com/terms',
    'name': metadata.title,
    'description': metadata.description,
    'inLanguage': 'en-US',
    'isPartOf': {
      '@type': 'WebSite',
      '@id': 'https://workflowchampions.com/#website'
    },
    'mainEntity': {
      '@type': 'TermsOfService',
      'name': 'Terms of Service',
      'description': metadata.description,
      'publisher': {
        '@type': 'Organization',
        'name': 'Workflow Champions',
        'url': 'https://workflowchampions.com'
      },
      'datePublished': '2024-01-01T00:00:00+00:00',
      'dateModified': new Date().toISOString(),
      'offers': {
        '@type': 'Offer',
        'seller': {
          '@type': 'Organization',
          'name': 'Workflow Champions'
        }
      }
    },
    'speakable': {
      '@type': 'SpeakableSpecification',
      'cssSelector': ['h1', 'h2', '.terms-content']
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(termsSchema)
        }}
      />
      <TermsContent />
    </>
  )
} 