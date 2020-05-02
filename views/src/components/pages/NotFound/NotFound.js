import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

export default ({ isAuthenticated }) => {
    const location = useLocation();

    return (
        <>
            <Helmet>
                <meta name="description" content=""/>
                <meta name="keywords" content=""/>
                <title>404 Page Not Found</title>
            </Helmet>
            <main role="main" id="not-found">
                <h1>Page Not Found</h1>
                <p>There are no resources located at <code>{location.pathname}</code></p>
                {isAuthenticated ? <a href="/">Go back to App</a> : <a href="/">Go back to Home</a>}
            </main>
        </>
    );
};