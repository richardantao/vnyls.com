import React from "react";

import { NavItem, NavLink } from "reactstrap";

export default () => {
    return (
        <>
            <NavItem>
                <NavLink href="/login">Sign In</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/pricing#checkout" className="highlight-link">Sign Up</NavLink>
            </NavItem>
        </>
    );
};