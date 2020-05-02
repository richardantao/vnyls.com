import React from "react";
import { Helmet } from "react-helmet";

import Footer from "../../organisms/Footer";

import "./Post.scss";

export default () => {
    return (
        <>
            <Helmet>
                <meta name="description" content=""/>
                <meta name="keywords" content=""/>
            </Helmet>
            <main role="main" id="post">

            </main>
            <Footer/>
        </>
    );
};