import React, { useState } from "react";

import { Row, Col } from "reactstrap";

import "./Song.scss";

export default ({ thumbnail, title, artist, genre}) => {
    const [isPlaying, togglePlaying] = useState(false);

    return (
        <Row>
            <Col xs="" sm="" md="" lg="" xl="1">
                <img src={thumbnail}/>
            </Col>
            <Col xs="" sm="" md="" lg="" xl="5">
                <h5>{title}</h5>
            </Col>
            <Col xs="" sm="" md="" lg="" xl="3">
                <h6>{artist}</h6>
            </Col>
            <Col xs="" sm="" md="" lg="" xl="3">
                <h6>{genre}</h6>
            </Col>
        </Row>
    );
};