import React from "react";

import { NavItem, NavLink } from "reactstrap";

export default () => {
    return (
        <>
            <NavItem>
                <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/pricing">Pricing</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/blog">Blog</NavLink>
            </NavItem>
        </>
    )
};