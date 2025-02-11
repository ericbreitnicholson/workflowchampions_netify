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
  return <TermsContent />
} 