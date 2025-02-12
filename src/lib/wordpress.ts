import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { gql } from '@apollo/client/core';

const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

if (!WORDPRESS_API_URL) {
  throw new Error('NEXT_PUBLIC_WORDPRESS_API_URL is not defined in environment variables');
}

// Create the Apollo Client with proper configuration
const httpLink = createHttpLink({
  uri: WORDPRESS_API_URL
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

// Test query to verify connection
export const TEST_QUERY = gql`
  query TestQuery {
    generalSettings {
      title
      url
    }
  }
`;

// Function to test the connection
export async function testConnection() {
  if (!WORDPRESS_API_URL) {
    throw new Error('WordPress API URL is not defined');
  }

  try {
    console.log('Testing connection to:', WORDPRESS_API_URL);
    const result = await fetch(WORDPRESS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query TestQuery {
            generalSettings {
              title
              url
            }
          }
        `
      })
    });
    
    if (!result.ok) {
      throw new Error(`HTTP error! status: ${result.status}`);
    }
    
    const data = await result.json();
    console.log('Connection response:', data);
    return data;
  } catch (error) {
    console.error('WordPress connection error:', error);
    throw error;
  }
}

export default client;

// Helper function to format WordPress content
export function formatWPContent(content: string): string {
  if (!content) return '';
  
  return content
    .replace(/\[.*?\]/g, '') // Remove shortcodes
    .replace(/<\/?p>/g, '') // Remove p tags
    .replace(/<!--.*?-->/g, '') // Remove HTML comments
    .replace(/\n\s*\n/g, '\n') // Remove extra line breaks
    .trim();
}

// Types for WordPress content
export interface WPPost {
  id: string;
  title: string;
  content: string;
  date: string;
  slug: string;
  excerpt: string;
  status: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  categories?: {
    nodes: {
      id: string;
      name: string;
      slug: string;
    }[];
  };
  author?: {
    node: {
      name: string;
    };
  };
}

export interface WPPage {
  id: string;
  title: string;
  content: string;
  slug: string;
  template?: {
    templateName: string;
  };
  seo?: {
    title: string;
    metaDesc: string;
    canonical: string;
  };
}

// Common GraphQL queries
export const PAGE_QUERY = gql`
  query GetPage($slug: String!) {
    page(id: $slug, idType: URI) {
      id
      title
      content
      slug
      template {
        templateName
      }
      seo {
        title
        metaDesc
        canonical
      }
    }
  }
`;

export const POSTS_QUERY = gql`
  query GetPosts($first: Int!) {
    posts(first: $first, where: { status: PUBLISH }) {
      nodes {
        id
        title
        content
        date
        slug
        excerpt
        status
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        categories {
          nodes {
            id
            name
            slug
          }
        }
        author {
          node {
            name
          }
        }
      }
    }
  }
`; 