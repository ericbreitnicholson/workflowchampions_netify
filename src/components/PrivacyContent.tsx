'use client'

import Navigation from '@/components/Navigation'

export default function PrivacyContent() {
  return (
    <>
      <Navigation />
      
      <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Privacy Policy
            </h1>

            <div className="prose prose-lg">
              <p className="text-base leading-7 text-gray-700">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <h2>1. Information We Collect</h2>
              <p>
                Workflow Champions collects information that you provide directly to us, including but not limited to:
              </p>
              <ul>
                <li>Contact information (name, email, phone number)</li>
                <li>Business information</li>
                <li>Website analytics data</li>
                <li>Communication preferences</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul>
                <li>Provide and improve our services</li>
                <li>Communicate with you about our services</li>
                <li>Analyze and optimize our marketing efforts</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2>3. Information Sharing</h2>
              <p>
                We do not sell your personal information. We may share your information with trusted service providers who assist us in operating our business, subject to confidentiality obligations.
              </p>

              <h2>4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2>5. Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h2>6. Cookies and Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to analyze website traffic and improve your experience. You can control cookie preferences through your browser settings.
              </p>

              <h2>7. Changes to Privacy Policy</h2>
              <p>
                We may update this Privacy Policy periodically. We will notify you of any material changes by posting the new Privacy Policy on this page.
              </p>

              <h2>8. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at privacy@workflowchampions.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 