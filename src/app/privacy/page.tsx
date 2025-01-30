import { Metadata } from 'next'
import PrivacyContent from '@/components/PrivacyContent'

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  }
}

export default function Page() {
  return <PrivacyContent />
} 