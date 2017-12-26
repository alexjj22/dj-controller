/**
 * Created by Александр on 26.12.2017.
 */
import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { linkActions }      from '../../helpers/redux';
import PlayPause            from '../../Components/MusicController/PlayPause';
import Volume               from '../../Components/MusicController/Volume';
import {
    setCommonPlayPause,
    setCommonVolume
} from './actionCreators'

import './style.css';

@connect(
    ({ mainDjController }) => mainDjController,
    linkActions( setCommonPlayPause, setCommonVolume)
)
export default class MainDjController extends Component {
    render(){
        const {
            isPlaying,
            volume,
            setCommonPlayPause,
            setCommonVolume
        } = this.props;

        console.log(volume, isPlaying);

        return (
            <div className="main-dj-controller">
                <PlayPause
                    clickHandler={ () => setCommonPlayPause(!isPlaying) }
                    fontSize={ 48 }
                    isPlaying={ isPlaying } />

                <Volume
                    volume={ volume }
                    onChange={ setCommonVolume }
                />
            </div>
        )
    }
}