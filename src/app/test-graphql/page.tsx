'use client';

import { useEffect, useState } from 'react';
import { testConnection } from '@/lib/wordpress';

export default function TestGraphQL() {
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function runTest() {
      try {
        setLoading(true);
        setError(null);
        console.log('Starting GraphQL test...');
        const data = await testConnection();
        console.log('Test completed:', data);
        setResult(data);
      } catch (error: any) {
        console.error('Test failed:', error);
        setError(error?.message || 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    }

    runTest();
  }, []);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">WordPress GraphQL Connection Test</h1>
      
      <div className="mb-4">
        <strong>Testing endpoint:</strong> {process.env.NEXT_PUBLIC_WORDPRESS_API_URL}
      </div>

      {loading && (
        <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded mb-4">
          Testing connection...
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
          <h2 className="font-bold mb-2">Error:</h2>
          <pre className="whitespace-pre-wrap">{error}</pre>
        </div>
      )}

      {result && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
          <h2 className="font-bold mb-2">Success!</h2>
          <pre className="whitespace-pre-wrap overflow-auto">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}

      <div className="mt-8 text-sm text-gray-600">
        <h2 className="font-bold mb-2">Troubleshooting:</h2>
        <ul className="list-disc pl-5">
          <li>Make sure the WordPress site is accessible</li>
          <li>Verify WPGraphQL plugin is installed and activated</li>
          <li>Check if the GraphQL endpoint is publicly accessible</li>
          <li>Ensure CORS is properly configured on the WordPress side</li>
        </ul>
      </div>
    </div>
  );
} 