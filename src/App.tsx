import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {NavigationRoutes} from "./routes/NavigationRoutes";
import {ApolloAuthProvider} from "./apollo/apollo";

function App() {
    return (
        <BrowserRouter>
            <ApolloAuthProvider>
                <NavigationRoutes/>
            </ApolloAuthProvider>
        </BrowserRouter>
    );
}

export default App;
