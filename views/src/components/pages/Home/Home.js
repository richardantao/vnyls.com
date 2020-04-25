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
                        <div className="img-floater">
                            <h1>Lorem ipsum dolor sit amet…</h1>
                            <h2>Quisque egestas tristique eros, et sollicitudin lectus convallis a</h2>
                            <h2>Phasellus at vehicula dui. Fusce nulla mauris, pulvinar in sagittis a, suscipit id nisi.</h2>
                            <Button href="/pricing" className="cta">Get Started</Button>
                        </div>
                    </header>
                </main>
                <Footer/>
            </>
        );
    };
};