import React from "react";

import { NavItem, NavLink } from "reactstrap";

export default () => {
    return (
        <NavItem>
            <NavLink href="/logout">Logout</NavLink>
        </NavItem>
    );
};