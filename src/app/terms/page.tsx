import { Metadata } from 'next'
import TermsContent from '@/components/TermsContent'

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  }
}

export default function Page() {
  return <TermsContent />
} 