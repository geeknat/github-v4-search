import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from "@apollo/client";
import React from "react";
import {setContext} from "@apollo/client/link/context";
import result from "../graphql/introspection-result";

// @ts-ignore
export const ApolloAuthProvider = ({children}) => {

    const httpLink = createHttpLink({
        uri: process.env.REACT_APP_BASE_URI,
    });

    const authLink = setContext((_, {headers}) => {
        return {
            headers: {
                ...headers,
                authorization: `Bearer ${process.env.REACT_APP_GH_TOKEN}`,
            }
        }
    });

    const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache({
            possibleTypes: result.possibleTypes,
        })
    });

    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )

}
