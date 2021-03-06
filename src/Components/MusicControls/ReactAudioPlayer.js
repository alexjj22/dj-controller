/**
 * Created by Александр on 26.12.2017.
 */
import React, { Component } from 'react';
import PropTypes            from 'prop-types';

class ReactAudioPlayer extends Component {

    componentDidUpdate(prevProps ){
        const { volume, isPlaying, speed } = this.props;
        const audio = this.audioEl;

        if( prevProps.volume !== volume ) {
            audio.volume = volume;
        }

        if( prevProps.speed !== speed ) {
            audio.playbackRate = speed;
        }

        if( prevProps.isPlaying !== isPlaying) {
            isPlaying ? this.audioEl.play() : this.audioEl.pause();
        }
    }

    componentDidMount() {
        const { volume, currentTime, speed } = this.props;
        const audio = this.audioEl;

        //settings
        audio.volume = volume;
        audio.playbackRate = speed;
        audio.currentTime = currentTime;

        // listeners
        audio.addEventListener('error', (e) => {
            this.props.onError(e);
        });

        // When enough of the file has downloaded to start playing
        audio.addEventListener('canplay', (e) => {
            this.props.onCanPlay(e);
        });

        // When enough of the file has downloaded to play the entire file
        audio.addEventListener('canplaythrough', (e) => {
            this.props.onCanPlayThrough(e);
        });

        // When audio play starts
        audio.addEventListener('play', (e) => {
            this.setListenTrack();
            this.props.onPlay(e);
        });

        // When unloading the audio player (switching to another src)
        audio.addEventListener('abort', (e) => {
            this.clearListenTrack();
            this.props.onAbort(e);


        });

        // When the file has finished playing to the end
        audio.addEventListener('ended', (e) => {
            this.clearListenTrack();
            this.props.onEnded(e);
        });

        // When the user pauses playback
        audio.addEventListener('pause', (e) => {
            this.clearListenTrack();
            this.props.onPause(e);
        });

        // When the user drags the time indicator to a new time
        audio.addEventListener('seeked', (e) => {
            this.props.onSeeked(e);
        });

        audio.addEventListener('loadedmetadata', (e) => {
            this.props.onLoadedMetadata(e);
        });
    }

    /**
     * Set an interval to call props.onListen every props.listenInterval time period
     */
    setListenTrack() {
        if (!this.listenTracker) {
            const listenInterval = this.props.listenInterval;
            this.listenTracker = setInterval(() => {
                this.props.onListen(this.audioEl.currentTime);
            }, listenInterval);
        }
    }

    /**
     * Clear the onListen interval
     */
    clearListenTrack() {
        if (this.listenTracker) {
            clearInterval(this.listenTracker);
            this.listenTracker = null;
        }
    }

    render() {
        const incompatibilityMessage = this.props.children || (
                <p>Your browser does not support the <code>audio</code> element.</p>
            );

        // Set controls to be true by default unless explicity stated otherwise
        const controls = !(this.props.controls === false);

        // Set lockscreen / process audio title on devices
        const title = this.props.title ? this.props.title : this.props.src;

        // Some props should only be added if specified
        const conditionalProps = {};
        if (this.props.controlsList) {
            conditionalProps.controlsList = this.props.controlsList;
        }

        return (
            <audio
                autoPlay={this.props.autoPlay}
                className={`react-audio-player ${this.props.className}`}
                controls={controls}
                loop={this.props.loop}
                muted={this.props.muted}
                onPlay={this.onPlay}
                preload={this.props.preload}
                ref={(ref) => { this.audioEl = ref; }}
                src={this.props.src}
                style={this.props.style}
                title={title}
                //volume={ this.props.volume }
                {...conditionalProps}
            >
                {incompatibilityMessage}
            </audio>
        );
    }
}

ReactAudioPlayer.defaultProps = {
    volume: 1,
    autoPlay: false,
    children: null,
    className: '',
    controls: false,
    controlsList: '',
    isPlaying: false,
    listenInterval: 10000,
    loop: false,
    muted: false,
    onAbort: () => {},
    onCanPlay: () => {},
    onCanPlayThrough: () => {},
    onEnded: () => {},
    onError: () => {},
    onListen: () => {},
    onPause: () => {},
    onPlay: () => {},
    onSeeked: () => {},
    onLoadedMetadata: () => {},
    preload: 'metadata',
    src: null,
    style: {},
    title: '',
};

ReactAudioPlayer.propTypes = {
    autoPlay: PropTypes.bool,
    children: PropTypes.element,
    className: PropTypes.string,
    controls: PropTypes.bool,
    controlsList: PropTypes.string,
    isPlaying: PropTypes.bool,
    listenInterval: PropTypes.number,
    loop: PropTypes.bool,
    muted: PropTypes.bool,
    onAbort: PropTypes.func,
    onCanPlay: PropTypes.func,
    onCanPlayThrough: PropTypes.func,
    onEnded: PropTypes.func,
    onError: PropTypes.func,
    onListen: PropTypes.func,
    onPause: PropTypes.func,
    onPlay: PropTypes.func,
    onSeeked: PropTypes.func,
    onLoadedMetadata: PropTypes.func,
    preload: PropTypes.oneOf(['', 'none', 'metadata', 'auto']),
    src: PropTypes.string, // Not required b/c can use <source>
    style: PropTypes.objectOf(PropTypes.string),
    title: PropTypes.string,
    volume: PropTypes.number,
};

export default ReactAudioPlayer;
