import React, { Component } from "react";

import { connect } from "react-redux";
import { login } from "../../../actions/auth";
import { clearErrors } from "../../../actions/errors";
import PropTypes from "prop-types";

import { Container, Row, Col, Alert, Button, Form, Label, Input } from "reactstrap";

import "./Login.scss";

class Login extends Component {
    state = {
        email: "",
        password: "",
        message: null
    };

    static propTypes = {
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    componentDidUpdate(prevProps) {
        const { error } = this.props;

        if(error !== prevProps.error) {
            if(error.id === "LOGIN_FAILED") {
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

        const { email, password } = this.state;
        const { login } = this.props;

        const user = {
            email,
            password
        };

        login(user);
    };

    render() {
        const { email, password, message } = this.state;

        return (
            <>
                <Container id="login">
                    { message ? <Alert color="danger">{message}</Alert> : null }
                    <Form onSubmit={this.handleSubmit}>
                        <Row>
                            <Col>
                                <Label for="email">Email</Label>
                                <Input
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={this.handleChange}
                                    required
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Label for="password">Password</Label>
                                <Input
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={this.handleChange}
                                    required
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button type="submit">Login</Button>
                                <br/>
                                <a href="/forgot-password">Forgot Password?</a>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </>
        );
    };
};

const mapStateToProps = state => ({
    error: state.error
});

const mapDispatchToProps = { login, clearErrors };

export default connect(mapStateToProps, mapDispatchToProps)(Login);