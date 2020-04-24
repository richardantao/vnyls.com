import React from "react";
import { Helmet } from "react-helmet";

import Footer from "../../organisms/Footer";

export default () => {
    return (
        <>
            <Helmet>
                <meta name="description" content=""/>
                <meta name="keywords" content=""/>
                <title>Pricing</title>
                <script src="https://js.stripe.com/v3/"></script>
            </Helmet>
            <main role="main">
                
            </main>
            <Footer/>
        </>
    );
};