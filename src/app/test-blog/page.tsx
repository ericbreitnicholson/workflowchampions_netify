'use client';

import { useEffect, useState } from 'react';
import client, { POSTS_QUERY, type WPPost } from '@/lib/wordpress';

export default function TestBlog() {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        setError(null);
        console.log('Fetching posts...');
        
        const { data } = await client.query({
          query: POSTS_QUERY,
          variables: { first: 10 },
        });
        
        console.log('Posts data:', data);
        setPosts(data.posts.nodes);
      } catch (error: any) {
        console.error('Failed to fetch posts:', error);
        setError(error?.message || 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">WordPress Blog Posts Test</h1>

      {loading && (
        <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded mb-4">
          Loading posts...
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
          <h2 className="font-bold mb-2">Error:</h2>
          <pre className="whitespace-pre-wrap">{error}</pre>
        </div>
      )}

      {posts.length > 0 ? (
        <div className="space-y-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold mb-2">{post.title}</h2>
              <div className="text-sm text-gray-500 mb-4">
                <span>By {post.author?.node?.name || 'Unknown'}</span>
                <span className="mx-2">•</span>
                <span>{new Date(post.date).toLocaleDateString()}</span>
                {post.categories?.nodes && post.categories.nodes.length > 0 && (
                  <>
                    <span className="mx-2">•</span>
                    <span>
                      {post.categories.nodes.map(category => category.name).join(', ')}
                    </span>
                  </>
                )}
              </div>
              <div className="prose" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
            </div>
          ))}
        </div>
      ) : !loading && (
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded">
          No posts found.
        </div>
      )}
    </div>
  );
} 