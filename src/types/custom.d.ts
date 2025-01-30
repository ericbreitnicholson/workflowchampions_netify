declare module 'html-react-parser' {
  function parse(html: string): JSX.Element | JSX.Element[];
  export = parse;
}

declare module '@apollo/client' {
  export interface ApolloClientOptions<TCacheShape> {
    link: any;
    cache: any;
  }

  export class ApolloClient<TCacheShape> {
    constructor(options: ApolloClientOptions<TCacheShape>);
    query: any;
  }

  export class InMemoryCache {
    constructor();
  }

  export function createHttpLink(options: { uri: string }): any;
} 