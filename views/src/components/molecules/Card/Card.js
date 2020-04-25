import React from "react";

import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

export default ({ href, title, subtitle, src, alt, text }) => {
    return (
        <a href={"/blog" + href}>
            <Card>
            <CardBody>
                <CardTitle><h3>{title}</h3></CardTitle>
                <CardSubtitle><h4>{subtitle}</h4></CardSubtitle>
            </CardBody>
            <CardImg src={src} alt={alt}/>
            <CardBody>
                <CardText>{text}</CardText>
            </CardBody>
            </Card>
        </a>
    );
};