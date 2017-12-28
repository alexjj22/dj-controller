/**
 * Created by Александр on 25.12.2017.
 */
import React, { Component } from 'react';
import ReactAudioPlayer     from './../../../Components/MusicControls/ReactAudioPlayer';
import PlayPause            from './../../../Components/MusicControls/PlayPause';
import Prev                 from './../../../Components/MusicControls/Prev';
import Next                 from './../../../Components/MusicControls/Next';
import ToStart              from './../../../Components/MusicControls/ToStart';
import Timer                from './../../../Components/MusicControls/Timer';
import Speed                from './../../../Components/MusicControls/Speed';
import TrackProgress        from './../../../Components/MusicControls/TrackProgress';
import Volume               from './../../../Components/MusicControls/Volume';
import { connect }          from 'react-redux';
import { linkActions }      from '../../../helpers/redux';
import {
    setLocalPlayPause,
    updatePlaylistSettings
} from '../actionCreators';


@connect(
    ({ mainDjController }) => mainDjController,
    linkActions( setLocalPlayPause, updatePlaylistSettings )
)
export default class MusicController extends Component {

    componentWillMount(){
        const {
            updatePlaylistSettings,
            playlist,
            src,
            id
        } = this.props;

        if( !src ) {
            const settingsObj = {
                src: playlist[0].preview,
                currentTime: 0,
                duration: 0,
                isPlaying: false
            };
            updatePlaylistSettings(settingsObj, id)
        }
    }

    canPlay = e => {
        const {
            id,
            isPlaying,
            updatePlaylistSettings
        } = this.props;

        updatePlaylistSettings( { duration: e.target.duration }, id );

        if( isPlaying && e.target.played ){
            e.target.play();
        }
    }

    onTrackTimeUpdate = time => {
        const {
            updatePlaylistSettings,
            id
        } = this.props;

        updatePlaylistSettings( { currentTime: time}, id);
        this.audio.audioEl.currentTime = time;
    }

    onTrackEnded = e => {
        const {
            playlist,
            id,
            src,
            updatePlaylistSettings
        } = this.props;

        const playlistLength = playlist.length;

        if( playlistLength > 1) {
            const currentIndex = playlist.map( item => item.preview ).indexOf( src );
            const nextSrc = currentIndex + 1 === playlistLength ? playlist[0].preview : playlist[currentIndex + 1].preview;

            const settingsObj = {
                src: nextSrc,
                isPlaying: true
            };

            updatePlaylistSettings( settingsObj, id )
        } else {
            const settingsObj = {
                currentTime: 0,
                isPlaying: false
            };

            updatePlaylistSettings( settingsObj, id )
        }
    }

    onPrevNextPlay = attr => {
        const {
            playlist,
            id,
            src,
            updatePlaylistSettings
        } = this.props;

        const playlistLength = playlist.length;

        if( playlistLength > 1 ) {
            const currentIndex = playlist.map( item => item.preview ).indexOf( src );
            const nextSrc = currentIndex + 1 === playlistLength ? playlist[0].preview : playlist[currentIndex + 1].preview;
            const prevSrc = currentIndex === 0 ? playlist[playlistLength - 1].preview : playlist[currentIndex -1].preview;
            const currentSrc = attr === 'next' ? nextSrc : prevSrc;

            const settingsObj = {
                src: currentSrc,
                isPlaying: true
            };

            updatePlaylistSettings( settingsObj, id )
        }
    }

    onPlay = e => {
        const { speed } = this.props;

        if(e.target.playbackRate !== speed) e.target.playbackRate = speed
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
            updatePlaylistSettings,
            src,
            speed,
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
                        onListen={ time => updatePlaylistSettings( { currentTime: Math.round(time) }, id) }
                        ref={ element => { this.audio = element }}
                        onCanPlay={ this.canPlay }
                        volume={ volumeForPlayer }
                        isPlaying={ isPlaying }
                        onEnded={ this.onTrackEnded }
                        speed={ speed }
                        currentTime={ currentTime }
                        onPlay={ this.onPlay }
                    />

                    <Prev
                        clickHandler={ () => this.onPrevNextPlay('prev') }
                        fontSize={ 18 }
                    />

                    <PlayPause
                        id={ id }
                        clickHandler={ setLocalPlayPause.bind(null, !isPlaying, id) }
                        fontSize={ 32 }
                        isPlaying={ isPlaying } />

                    <Next
                        clickHandler={ () => this.onPrevNextPlay('next') }
                        fontSize={ 18 }
                    />

                    <ToStart
                        clickHandler={ () => this.onTrackTimeUpdate(0) }
                        fontSize={ 18 }
                    />

                    <Volume
                        volume={ volume }
                        onChange={ volume => updatePlaylistSettings( { volume }, id) }
                    />

                    <Timer
                        current={ currentTime }
                        duration={ duration }
                    />

                    <Speed
                        speed={ speed }
                        onChange={ speed => updatePlaylistSettings( { speed }, id) }
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
                                    onClick={ () => { preview !== src && updatePlaylistSettings({ src: preview, isPlaying: true }, id )} }
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