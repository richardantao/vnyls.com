import React from "react";
import { Helmet } from "react-helmet";

import { Row, Col } from "reactstrap";

import Card from "../../molecules/Card";
import Footer from "../../organisms/Footer";

export default () => {
    return (
        <>
            <Helmet>
                <meta name="description" content=""/>
                <meta name="keywords" content=""/>
                <title>Blog</title>
            </Helmet>
            <main role="main">
                <Row>
                    <Col>
                        <Card
                            href="/"
                            title=""
                            subtitle=""
                            src=""
                            alt=""
                            text=""
                        />

                        <Card
                            href="/"
                            title=""
                            subtitle=""
                            src=""
                            alt=""
                            text=""
                        />
                    </Col>
                </Row>
            </main>
            <Footer/>
        </>
    );
};