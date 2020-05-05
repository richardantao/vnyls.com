import React, { useState } from "react";

import { Nav, Navbar } from "reactstrap";

import AuthLinks from "../../molecules/AuthLinks";
import PrivateLinks from "../../molecules/PrivateLinks";
import PublicLinks from "../../molecules/PublicLinks";

import Overlay from "../Overlay";

import "./Nav.scss";

export default ({ isAuthenticated }) => {
    const [] = useState();

    return (
        <Navbar id="nav" role="navigation">
            <Nav>
                { isAuthenticated ? <PrivateLinks/> : <PublicLinks/> }
            </Nav>
            <Nav>
                { !isAuthenticated ? <AuthLinks/> : null }
            </Nav>
            <Overlay/>
        </Navbar>
    );
};