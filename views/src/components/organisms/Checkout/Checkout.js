import React, { Component } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { connect } from "react-redux";
import PropTypes from "prop-types";

class Checkout extends Component {
    state = {

    };

    static propTypes = {
        error: PropTypes.object.isRequired
    };

    render() {
        const stripePromise = "pk_test_moDxdPCCtlx27IdhkBcPqB3M001KBNprdD"; // TEST

        return (
            <Elements loadStripe={stripePromise}>
                <Form>

                </Form>
            </Elements>
        );
    };
};

const mapStateToProps = state => ({
    error: state.error
});

const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);