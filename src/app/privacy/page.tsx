import { Metadata } from 'next'
import PrivacyContent from '@/components/PrivacyContent'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Privacy Policy - Workflow Champions',
  description: 'Read our privacy policy to understand how Workflow Champions collects, uses, and protects your personal information.',
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: 'https://workflowchampions.com/privacy'
  }
}

export default function Page() {
  const privacySchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://workflowchampions.com/privacy#webpage',
    'url': 'https://workflowchampions.com/privacy',
    'name': metadata.title,
    'description': metadata.description,
    'inLanguage': 'en-US',
    'isPartOf': {
      '@type': 'WebSite',
      '@id': 'https://workflowchampions.com/#website'
    },
    'mainEntity': {
      '@type': 'PrivacyPolicy',
      'name': 'Privacy Policy',
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
      },
      'datePublished': '2024-01-01T00:00:00+00:00',
      'dateModified': new Date().toISOString()
    },
    'speakable': {
      '@type': 'SpeakableSpecification',
      'cssSelector': ['h1', 'h2', '.privacy-content']
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(privacySchema)
        }}
      />
      <PrivacyContent />
    </>
  )
} 