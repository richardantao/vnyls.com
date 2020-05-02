import React, { Component } from "react";
import { Helmet } from "react-helmet";

import { connect } from "react-redux";
import { logErrors } from "../../../actions/errors";
import PropTypes from "prop-types";

import { Container } from "reactstrap";

import "./ErrorBoundary.scss";

class ErrorBoundary extends Component {
    state = {
        hasError: false
    };

    static propTypes = {
        logErrors: PropTypes.func.isRequired
    };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        const { logErrors } = this.props;
        // logErrors(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if(!hasError) return children;

        return (
            <>
                <Helmet>
                    <meta name="description" content=""/>
                    <meta name="keywords" content=""/>
                    <title>400 Bad Request Error</title>
                </Helmet>
                <Container role="main" id="error">
                    An error occurred. Please reload the page.
                </Container>
            </>
        );
    };
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = { logErrors };

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundary);