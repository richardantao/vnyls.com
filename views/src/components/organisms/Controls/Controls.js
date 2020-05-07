import React, { Component } from "react";

import { connect } from "react-redux";
import { } from "../../../actions/songs";
import PropTypes from "prop-types";

import { Row, Col } from "reactstrap";
import { faChevronLeft, faPlay, faChevronRight, faPause } from "@fortawesome/free-solid-svg-icons";

import Icon from "../../atoms/Icon";

import "./Controls.scss";

class Controls extends Component {
    state = {
        isPlaying: false,
        progress: 0,
    };

    static propTypes = {

    };

    componentDidUpdate(prevProps) {

    };

    togglePlay = () => {
        const { isPlaying } = this.state;
        this.setState({ isPlaying: !isPlaying });
    };

    handleProgress = e => {


        this.setState({ progress })
    };

    format2Number = num => {
        var str = num + "";
        if (str.length === 1) {
            return "0" + str;
        } else if (str.length === 0) {
            return "00";
        };

        return str;
    };

    formatTime = sec => {
        if (!sec && sec !== 0) {
            return "??:??";
        };

        const total_seconds = Math.floor(sec);
        const hours = Math.floor(total_seconds / 3600);
        const minutes = Math.floor(total_seconds / 60) - hours * 60;
        const seconds = total_seconds - minutes * 60 - hours * 3600;

        if(hours) {
            return hours + ":" + this.format2Number(minutes) + ":" + this.format2Number(seconds);
        };

        return this.format2Number(minutes) + ":" + this.format2Number(seconds);
    };

    offsetLeft(el) {
        const left = 0;

        while (el && el !== document) {
            left += el.offsetLeft;
            el = el.offsetParent;
        };

        return left;
    };

    classnames = obj => {
        const css = [];
        Object.keys(obj).forEach(key => {
            if (obj[key]) {
                css.push(key);
            };
        });

        return css.join(' ');
    };

    render() {
        const { isPlaying, progress } = this.state;
        const { src, onPrev, onNext } = this.props;

        const currentTime = 0;
        const totalTime = 0;

        if (this.player) {
            if (this.player.currentSrc !== src) {
                this.player.src = this.props.src;
            };

            if (this.player.paused && !this.player.ended) {
                if (isPlaying) {
                    this.player.play();
                };
            } else if (!isPlaying) {
                this.player.pause();
            };

            if (this.is_progress_dirty) {
                this.is_progress_dirty = false;

                this.player.currentTime = this.player.duration * progress;
            };

            currentTime = this.player.currentTime;
            totalTime = this.player.duration;
        };

        return (
            <Row id="player">
                <Col className="controls">
                    <a onClick={onPrev}>
                        <Icon icon={faChevronLeft} aria-hidden="true"/>
                    </a>
                    <a onClick={this.togglePlay.bind(this)}>
                        { isPlaying ?
                            <Icon icon={faPause} aria-hidden="true"/>
                            :
                            <Icon icon={faPlay} aria-hidden="true"/>
                        }
                    </a>
                    <a onClick={onNext}>
                        <Icon icon={faChevronRight} aria-hidden="true"/>
                    </a>
                </Col>
                <Col
                    onMouseDown
                    onMouseMove
                    onMouseLeave
                    onMouseUp
                    className="progress"
                >
                    <div ref={ref => this.progressBar = ref} className="bar">
                        <div style={{ width: (this.state.progress * 100) + '%' }}></div>
                    </div>
                </Col>
                <Col className="time">
                    {this.formatTime(currentTime)} / {this.formatTime(totalTime)}
                </Col>
                <audio ref={ref => this.player = ref} autoPlay={isPlaying}>
                        <source src={src}/>
                        <source/>
                </audio>
            </Row>
        );
    };
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(Controls);