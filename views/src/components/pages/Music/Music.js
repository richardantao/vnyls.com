import React, { Component } from "react";
import { Helmet } from "react-helmet";

import { connect } from "react-redux";
import { fetchSongs } from "../../../actions/songs";
import { clearErrors } from "../../../actions/errors"; 
import PropTypes from "prop-types";

import AudioPlayer from "react-audio-player";

import Footer from "../../organisms/Footer";

import "./Music.scss";

class Music extends Component {
    state = {

    };

    static propTypes = {
        error: PropTypes.object.isRequired,
        song: PropTypes.object.isRequired,
        fetchSongs: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    componentDidMount() {
        const { clearErrors } = this.props;
        clearErrors();
    };

    componentDidUpdate(prevProps) {
        const { error } = this.props;

        if(error !== prevProps.error) {
            if(error.id === "SONGS_FAILED") {
                this.setState({ message: error.message.message });
            };

            this.setState({ });
        };
        
    };

    render() {
        const { songs } = this.props.song;
        
        return (
            <>
                <Helmet>
                    <meta name="description" content=""/>
                    <meta name="keywords" content="songs, playlists, music, records, vinyls"/>
                    <title>Music Player</title>
                </Helmet>
                <main role="main">  
                    {songs.map(({ name }) => {
                        return <AudioPlayer src={name}/>
                    })}
                </main>
                <Footer/>
            </>
        );
    }; 
};


const mapStateToProps = state => ({
    error: state.error,
    song: state.song
});

const mapDispatchToProps = { fetchSongs, clearErrors };

export default connect(mapStateToProps, mapDispatchToProps)(Music);