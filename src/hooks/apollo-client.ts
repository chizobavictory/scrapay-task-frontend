import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://scrapay-backend-zow5.onrender.com",
  cache: new InMemoryCache(),
});

export default client;
