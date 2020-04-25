import React, { Component } from "react";
import { Helmet } from "react-helmet";

import { Button } from "reactstrap";

import Footer from "../../organisms/Footer";

import "./Home.scss";
import backdrop from "./vnyls-landing.jpg";

export default class Home extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <meta name="description" content="Register for a Vnyls account today"/>
                    <meta name="keywords" content="Sign, Up, Register"/>
                    <title>Vnyls</title>
                </Helmet>
                <main role="main" id="home">
                    <header id="overlay">
                        <img src={backdrop} id="hero" alt="Vinyl's Landing Page Backdrop"/>
                        <Button href="/pricing" className="cta">Learn More</Button>
                    </header>
                </main>
                <Footer/>
            </>
        );
    };
};