import React, { Component } from "react";

import { connect } from "react-redux";
import { logout } from "../../../actions/auth";
import PropTypes from "prop-types";

import Loading from "../../atoms/Loading";

class Logout extends Component {
    static propTypes = {
        logout: PropTypes.func.isRequired
    };

    componentDidMount() {
        const { logout } = this.props;
        logout();
    };

    render() {
        return <Loading/>;
    };
};

export default connect(null, { logout })(Logout);