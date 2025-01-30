'use client'

import { useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Script from 'next/script'

export default function Contact() {
  useEffect(() => {
    // Initialize Calendly widget when component mounts
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center mb-12">
            Schedule a Consultation
          </h1>
          
          {/* Calendly inline widget */}
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/eric-workflowchampions/30min"
            style={{ minWidth: '320px', height: '700px' }} 
          />
        </div>
      </div>
    </>
  )
} 