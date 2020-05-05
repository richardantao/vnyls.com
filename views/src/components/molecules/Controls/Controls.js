import React, { Component } from "react";

import { Row, Col } from "reactstrap";

export default class Controls extends Component {
    state = {
        isPlaying: false,
        progress: 0,
        currentTime: 0,
        totalTime: 0
    };

    static propTypes = {

    };

    togglePlay = () => {

    };



    render() {
        const { isPlaying, progress, } = this.state;
        const { thumbnail, title, artist, src } = this.props;

        return (
            <Row>
                <Col xs="5" sm="5" md="5" lg="5" xl="5">
                    <img src={src}/>
                </Col>
                <Col xs="4" sm="4" md="4" lg="4" xl="4">
                
                </Col>
                <Col xl="3" sm="3" md="3" lg="3" xl="3">
                
                </Col>
                <audio>
                    <source src={src} />
                </audio>
            </Row>
        );
    };
};