import React, { Component } from "react";

import PropTypes from "prop-types";

import { Row, Col } from "reactstrap";
import AudioPlayer from "react-audio-player";

import Song from "../../molecules/Song";

import "./Playlist.scss";

export default class Playlist extends Component {
    state = {

    };

    static propTypes = {
        songs: PropTypes.array.isRequired
    };

    render() {
        const { songs } = this.props;

        return songs.map(({ path_lower }) => {
            return (
                <Row>
                    <Col>
                        {songs.map(({ thumbnail, title, artist, genre }) => {
                            return <Song thumbnail={thumbnail} title={title} artist={artist} genre={genre}/>
                        })}
                        <AudioPlayer src={path_lower} autoPlay controls/>
                    </Col>
                </Row>
            );
        });
    };
};