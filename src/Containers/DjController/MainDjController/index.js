/**
 * Created by Александр on 26.12.2017.
 */
import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { linkActions }      from '../../../helpers/redux';
import Volume               from '../../../Components/MusicController/Volume';
import PlayPause            from '../../../Components/MusicController/PlayPause';
import {
    setCommonPlayPause,
    setCommonVolume
} from '../actionCreators'

@connect(
    ({ mainDjController }) => mainDjController,
    linkActions( setCommonPlayPause, setCommonVolume)
)
export default class MainDjController extends Component {
    componentWillUnmount(){
        const {
            isPlaying,
            setCommonPlayPause,
            } = this.props;

        isPlaying && setCommonPlayPause(!isPlaying);
    }

    render(){
        const {
            isPlayingCommon,
            commonVolume,
            setCommonPlayPause,
            setCommonVolume
        } = this.props;


        return (
            <div className="main-dj-controller">
                <PlayPause
                    clickHandler={ () => setCommonPlayPause(!isPlayingCommon) }
                    fontSize={ 48 }
                    isPlaying={ isPlayingCommon } />

                <Volume
                    volume={ commonVolume }
                    onChange={ setCommonVolume }
                />
            </div>
        )
    }
}