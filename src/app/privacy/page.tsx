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
  return <PrivacyContent />
} 