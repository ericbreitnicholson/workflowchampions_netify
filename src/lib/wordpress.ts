import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { gql } from '@apollo/client/core';

const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://workflowchampions.com/graphql';

// Test query to verify connection
export const TEST_QUERY = gql`
  query TestConnection {
    generalSettings {
      title
      url
    }
  }
`;

// Function to test the connection
export async function testConnection() {
  try {
    const result = await client.query({
      query: TEST_QUERY
    });
    return result.data;
  } catch (error) {
    console.error('WordPress connection error:', error);
    throw error;
  }
}

// Create the Apollo Client
const client = new ApolloClient({
  link: createHttpLink({
    uri: WORDPRESS_API_URL,
  }),
  cache: new InMemoryCache(),
});

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
  seo?: {
    title: string;
    metaDesc: string;
    canonical: string;
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
    posts(first: $first) {
      nodes {
        id
        title
        content
        date
        slug
        excerpt
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
        seo {
          title
          metaDesc
          canonical
        }
      }
    }
  }
`; 