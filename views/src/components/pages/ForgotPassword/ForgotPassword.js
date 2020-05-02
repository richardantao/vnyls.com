import React, { Component } from "react";
import { Helmet } from "react-helmet";

import { connect } from "react-redux";
import {  } from "../../../actions/auth";
import { clearErrors } from "../../../actions/errors";
import PropTypes from "prop-types";

import { Form, Alert, Label, Input, Button } from "reactstrap";

import "./ForgotPassword.scss";

class ForgotPassword extends Component {
    state = {
        email: "",
        message: null
    };

    static propTypes = {
        error: PropTypes.object.isRequired
    };

    componentDidUpdate(prevProps) {
        const { error } = this.props;

        if(error !== prevProps.error) {
            if(error.id === "") {
                this.setState({ message: error.message.message });
            };

            this.setState({ message: null });
        };
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();

        const { email } = this.state;
        const { } = this.props;


    };

    render() {
        const { email, message } = this.state;

        return (
            <>
                <Helmet>
                    <meta name="description" content=""/>
                    <meta name="keywords" content=""/>
                    <title>Forgot Password</title>
                </Helmet>
                <main role="main">
                    <Form onSubmit={this.handleSubmit}>
                        { message ? <Alert>{message}</Alert> : null }
                        <Label for="email">Email</Label>
                        <Input
                            name="email"
                            type="email"
                            value={email}
                            onChange={this.handleChange}
                            required
                        />

                        <Button type="submit"></Button>
                    </Form>
                </main>
            </>
        );
    };
};

const mapStateToProps = state => ({
    error: state.error
});

const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);