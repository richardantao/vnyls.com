import React from "react";
import { Helmet } from "react-helmet";

import { Row, Col } from "reactstrap";

import Card from "../../molecules/Card";
import Footer from "../../organisms/Footer";

import "./Blog.scss";
import first from "./first.jpg";
import second from "./second.jpg";
import third from "./third.jpg";

export default () => {
    return (
        <>
            <Helmet>
                <meta name="description" content=""/>
                <meta name="keywords" content=""/>
                <title>Blog</title>
            </Helmet>
            <main role="main" id="blog">
                <header className="header">
                    <h1>Blog</h1>
                </header>
                <Row>
                    <Col>
                        <Card
                            href="/third"
                            title="Third Post"
                            subtitle="Third post subtitle"
                            src={third}
                            alt="third"
                            text="Phasellus at vehicula dui. Fusce nulla mauris, pulvinar in sagittis a, suscipit id nisi."
                        />
                    </Col>
                    <Col>
                        <Card
                            href="/second"
                            title="Second Post"
                            subtitle="Second post subtitle"
                            src={second}
                            alt="second"
                            text="Phasellus at vehicula dui. Fusce nulla mauris, pulvinar in sagittis a, suscipit id nisi."
                        />
                    </Col>
                    <Col>
                        <Card
                            href="/first"
                            title="First Post"
                            subtitle="First post subtitle"
                            src={first}
                            alt="first"
                            text="Phasellus at vehicula dui. Fusce nulla mauris, pulvinar in sagittis a, suscipit id nisi."
                        />
                    </Col>
                </Row>
            </main>
            <Footer/>
        </>
    );
};