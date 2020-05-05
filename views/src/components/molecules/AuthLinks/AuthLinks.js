import React from "react";

import { NavItem, NavLink } from "reactstrap";

export default () => {
    return (
        <NavItem>
            <NavLink href="/signin" className="highlight-link">Sign In</NavLink>
        </NavItem>
    );
};