import React from "react";

import { NavItem, NavLink } from "reactstrap";

export default () => {
    return (
        <>
            <NavItem>
                <NavLink href="/login">Login</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/pricing#checkout" className="highlight-link">Register</NavLink>
            </NavItem>
        </>
    );
};