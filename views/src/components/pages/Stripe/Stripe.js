import React, { Component } from "react";
import { Helmet } from "react-helmet";

import { connect } from "react-redux";
import { createSubscription } from "../../../actions/stripe";
import { clearErrors } from "../../../actions/errors";
import PropTypes from "prop-types";

class Stripe extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        card: "",
        expiration: "",
        cvc: ""
    };

    static propTypes = {
        error: PropTypes.object.isRequired,
        stripe: PropTypes.object.isRequired,
        createSubscription: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    async componentDidMount() {
        const { } = this.props;
        await "";
    };

    render() {
        const { } = this.props;

        return (
            <>
                <Helmet>
                    <meta name="description" content=""/>
                    <meta name="keywords" content=""/>
                    <title>Checkout</title>
                </Helmet>
            </>
        );
    };
};

const mapStateToProps = state => ({
    error: state.error
});

const mapDispatchToProps = { createSubscription, clearErrors };

export default connect(mapStateToProps, mapDispatchToProps)(Stripe);