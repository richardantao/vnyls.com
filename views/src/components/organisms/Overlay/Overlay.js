import React, { Component } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import "./Overlay.scss";

export default class Overlay extends Component {
    state = {
        isActive: false
    };

    toggle = () => {
        const { isActive } = this.state;
        this.setState({ isActive: !isActive });
    };

    render() {
        const { isActive } = this.state;

        return (
            <>
                <Link to="#menu" onClick={this.toggle} id="hamburger">
                    <FontAwesomeIcon icon={faBars}/>
                </Link>

                {   isActive ?
                    <div id="nav-overlay">
                        <Link to="#closeMenu" className="cancel" onClick={this.toggle}>
                            <FontAwesomeIcon icon={faTimes}/>
                        </Link>

                        <nav role="navigation" id="nav-overlay-content">
                            <Link to="/pricing" onClick={this.toggle}>About</Link>
                            <Link to="/blog" onClick={this.toggle}>Blog</Link>

                            <Link to="/pricing" onClick={this.toggle}>Get Started</Link>
                            <Link to="/signin" onClick={this.toggle}>Sign In</Link>
                        </nav>
                    </div>
                    : null
                }
            </>
        );
    };
};