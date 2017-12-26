/**
 * Created by Александр on 25.12.2017.
 */
import React, { Component } from 'react';
import ReactAudioPlayer     from 'react-audio-player';
import PlayPause            from './PlayPause';
import Timer                from './Timer';
import TrackProgress        from './TrackProgress';
import Volume               from './Volume';


export default class MusicController extends Component {

    state = {
        isPlaying: false,
        currentTime: 0,
        duration: 0,
        src: '',
        volume: 1
    }

    volumeUpdate = volume => {
        this.setState({
            volume
        })
    }

    timeUpdate = time => {
        this.setState({
            currentTime: Math.round(time)
        });
    }

    setCurrentTime = time => {
        this.setState({
            currentTime: time
        }, () => {
            this.audio.audioEl.currentTime = time;
            setTimeout( () => this.audio.audioEl.play(), 50);
        });
    }



    playPause = () => {
        const { src } = this.state;
        const { playlist } = this.props;

        if(src){
            this.setState({
                isPlaying: !this.state.isPlaying
            }, this.audioControl() );
        } else {
            const currentSrc = src ? src : playlist[0].preview;
            this.setState({
                src: currentSrc
            });
        }
    }

    audioControl = () => {
        const { isPlaying } = this.state;
        isPlaying ? this.audio.audioEl.pause() : this.audio.audioEl.play();
    }

    setSrcFromPlaylist = ( src ) => {
        this.setState({
            isPlaying: false,
            currentTime: 0,
            duration: 0,
            src
        })
    }

    componentWillReceiveProps(nextProps, nextState) {

    }

    componentDidMount(){
        this.audio.audioEl.volume = this.state.volume;
    }

    componentDidUpdate(prevState){
        if( prevState.volume !== this.state.volume ) {
            this.audio.audioEl.volume = this.state.volume;
        }
    }

    canPlay = () => {
        this.setState({
            isPlaying: true,
            duration: this.audio.audioEl.duration
        }, this.audioControl() );
    }

    render(){
        const {
            currentTime,
            duration,
            isPlaying,
            src,
            volume
        } = this.state;

        const { playlist } = this.props;

        return (
            <div className="controller-dashboard">
                <PlayPause
                    clickHandler={ this.playPause }
                    fontSize={ 32 }
                    isPlaying={ isPlaying } />

                <Timer
                    current={ currentTime }
                    duration={ duration }
                />

                <Volume
                    volume={ volume }
                    onChange={ this.volumeUpdate }
                />

                <TrackProgress
                    current={ currentTime }
                    duration={ duration }
                    onChange={ this.setCurrentTime }
                />

                <ReactAudioPlayer
                    src={ src }
                    listenInterval={ 1000 }
                    onListen={ this.timeUpdate }
                    ref={ element => { this.audio = element }}
                    onCanPlay={ this.canPlay }
                />

                <ul className="audio-list">
                    {
                        playlist.map( ({ name, preview }) => {
                            return (
                                <li
                                    key={ name }
                                    className={ preview === src ? 'active' : '' }
                                    onClick={ () => { preview !== src && this.setSrcFromPlaylist(preview) } }>
                                    { name }
                                </li>
                            )
                        })
                    }
                </ul>

            </div>

        )
    }
}
