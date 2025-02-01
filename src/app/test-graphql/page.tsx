'use client';

import { useEffect, useState } from 'react';
import client, { TEST_QUERY } from '@/lib/wordpress';

export default function TestGraphQL() {
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function testConnection() {
      try {
        const response = await client.query({
          query: TEST_QUERY
        });
        setResult(response.data);
        setError(null);
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        setError(errorMessage);
        console.error('GraphQL Error:', error);
      }
    }

    testConnection();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">GraphQL Connection Test</h1>
      {error ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Error: {error}
        </div>
      ) : result ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
} 