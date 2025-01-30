'use client'

import Navigation from '@/components/Navigation'

export default function TermsContent() {
  return (
    <>
      <Navigation />
      
      <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Terms of Service
            </h1>

            <div className="prose prose-lg">
              <p className="text-base leading-7 text-gray-700">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing and using the services provided by Workflow Champions ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service.
              </p>

              <h2>2. Description of Services</h2>
              <p>
                Workflow Champions provides digital marketing and SEO services specifically designed for real estate professionals. Our services include but are not limited to website optimization, content creation, and local SEO strategies.
              </p>

              <h2>3. Use of Services</h2>
              <p>
                You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account information and for all activities under your account.
              </p>

              <h2>4. Payment Terms</h2>
              <p>
                Payment terms will be outlined in your service agreement. All fees are non-refundable unless otherwise specified in writing.
              </p>

              <h2>5. Intellectual Property</h2>
              <p>
                All content, features, and functionality of our services are owned by Workflow Champions and are protected by international copyright, trademark, and other intellectual property laws.
              </p>

              <h2>6. Limitation of Liability</h2>
              <p>
                Workflow Champions shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
              </p>

              <h2>7. Termination</h2>
              <p>
                We reserve the right to terminate or suspend access to our services immediately, without prior notice, for any breach of these Terms.
              </p>

              <h2>8. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our website.
              </p>

              <h2>9. Contact Information</h2>
              <p>
                For questions about these Terms, please contact us at support@workflowchampions.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 