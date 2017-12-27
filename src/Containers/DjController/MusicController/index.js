/**
 * Created by Александр on 25.12.2017.
 */
import React, { Component } from 'react';
//import ReactAudioPlayer     from 'react-audio-player';
import ReactAudioPlayer     from './../../../Components/MusicControls/ReactAudioPlayer';
import PlayPause            from './../../../Components/MusicControls/PlayPause';
import Prev                 from './../../../Components/MusicControls/Prev';
import Next                 from './../../../Components/MusicControls/Next';
import Timer                from './../../../Components/MusicControls/Timer';
import TrackProgress        from './../../../Components/MusicControls/TrackProgress';
import Volume               from './../../../Components/MusicControls/Volume';

import { connect }          from 'react-redux';
import { linkActions }      from '../../../helpers/redux';
import {
    setLocalPlayPause,
    setLocalVolume,
    setLocalCurrentTime,
    setLocalSrc,
    setLocalDuration
} from '../actionCreators';


@connect(
    ({ mainDjController }) => mainDjController,
    linkActions( setLocalPlayPause, setLocalVolume, setLocalCurrentTime, setLocalSrc, setLocalDuration )
)
export default class MusicController extends Component {

    componentWillReceiveProps(nextProps, nextState) {

    }

    componentWillMount(){
        const {
            setLocalSrc,
            playlist,
            src,
            id
        } = this.props;

        !src && setLocalSrc( playlist[0].preview, id, false )
    }

    componentDidUpdate(prevProps){
        //if( prevState.volume !== this.state.volume ) {
            //this.audio.audioEl.volume = this.state.volume;
        //}
        //const { volume, isPlaying } = this.props;

        //if( prevProps.isPlaying !== isPlaying ) {
            //isPlaying && this.audio.audioEl.play()
            //isPlaying ? this.audio.audioEl.play() : this.audio.audioEl.pause();
        //}
    }

    canPlay = e => {
        const {
            id,
            isPlaying,
            setLocalDuration
        } = this.props;

        setLocalDuration( e.target.duration, id );

        if( isPlaying && e.target.played ){
            e.target.play();
        }
    }

    onTrackTimeUpdate = time => {
        const {
            setLocalCurrentTime,
            id
        } = this.props;

        setLocalCurrentTime( time, id);
        this.audio.audioEl.currentTime = time;
    }

    onTrackEnded = e => {
        const {
            playlist,
            id,
            src,
            setLocalSrc
        } = this.props;

        const playlistLength = playlist.length;

        if( playlistLength > 1) {
            const currentIndex = playlist.map( item => item.preview ).indexOf( src );
            //console.log(currentIndex, playlistLength);
            const nextSrc = currentIndex + 1 === playlistLength ? playlist[0].preview : playlist[currentIndex + 1].preview;

            setLocalSrc( nextSrc, id, true )
        } else {

        }

    }

    render(){
        const {
            id,
            playlist,
            isPlaying,
            volume,
            currentTime,
            commonVolume,
            setLocalPlayPause,
            setLocalVolume,
            setLocalCurrentTime,
            setLocalDuration,
            setLocalSrc,
            src,
            duration
        } = this.props;

        const volumeForPlayer = volume * commonVolume;

        return (
            <div className="controller-dashboard">
                <div className="song-dashboard">
                    <ReactAudioPlayer
                        autoPlay={ false }
                        src={ src }
                        listenInterval={ 1000 }
                        onListen={ time => setLocalCurrentTime( Math.round(time), id) }
                        //onListen={ time => this.setCurrentTime( Math.round(time) ) }
                        ref={ element => { this.audio = element }}
                        onCanPlay={ this.canPlay }
                        volume={ volumeForPlayer }
                        isPlaying={ isPlaying }
                        onEnded={ this.onTrackEnded }
                    />

                    <Prev
                        clickHandler={ () => {} }
                        fontSize={ 18 }
                    />

                    <PlayPause
                        id={ id }
                        clickHandler={ setLocalPlayPause.bind(null, !isPlaying, id) }
                        fontSize={ 32 }
                        isPlaying={ isPlaying } />

                    <Next
                        clickHandler={ () => {} }
                        fontSize={ 18 }
                    />


                    <Volume
                        volume={ volume }
                        onChange={ volume => setLocalVolume(volume, id) }
                    />

                    <Timer
                        current={ currentTime }
                        duration={ duration }
                    />
                </div>

                <div className="progress-wrap">
                    <TrackProgress
                        current={ currentTime }
                        duration={ duration }
                        onChange={ this.onTrackTimeUpdate }
                    />
                </div>

                <ul className="audio-list">
                    {
                        playlist.map( ({ name, preview }) => {
                            return (
                                <li
                                    key={ name }
                                    className={ preview === src ? 'active' : '' }
                                    onClick={ () => { preview !== src && setLocalSrc( preview, id, true ) } }
                                >
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