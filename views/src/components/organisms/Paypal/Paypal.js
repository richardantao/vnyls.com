import React, { Component } from "react";

import { connect } from "react-redux";

import { clearErrors } from "../../../actions/errors";
import PropTypes from "prop-types";

import { Modal, ModalHeader, ModalBody, ModalFooter, Form, Alert, Label, Input, Button } from "reactstrap";

class Paypal extends Component {
    state = {
        isOpen: false,
        message: null
    };

    componentDidUpdate(prevProps) {
        const { error } = this.props;

        if(error !== prevProps.error) {
            if(error.id === "") {

            };

            this.setState({ message: null });
        };
    };

    toggle = () => {
        const { isOpen } = this.state;
        this.setState({ isOpen: !isOpen });
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();

        const { } = this.state;
        const { } = this.props;

        createSubscription();
    };

    render() {
        const { isOpen, message } = this.state;
        const { } = this.props;

        return (
            <Modal isOpen={isOpen} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}></ModalHeader>
                { message ? <Alert color="danger">{message}</Alert>}
                <Form onSubmit={this.handleSubmit}>
                    <ModalBody>
                        
                            <Label for=""></Label>

                            <Input
                                name=""
                                type=""
                                value=""
                                onChange={this.handleChange}
                                required
                            />
                        
                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit"></Button>
                    </ModalFooter>
                </Form>
            </Modal>
        );
    };
};

const mapStateToProps = state => ({
    error: state.error,
    paypal: state.paypal
});

const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(Paypal);