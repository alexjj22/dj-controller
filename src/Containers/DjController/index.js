/**
 * Created by Александр on 24.12.2017.
 */
import React, { Component } from 'react';
import MusicController      from '../../Components/MusicController/index';
import MainDjController     from './MainDjController/index'
import { connect }          from 'react-redux';
import { withRouter }       from 'react-router';
import { linkActions }      from '../../helpers/redux';
import {
    setLocalPlayPause,
    setLocalVolume,
    setLocalCurrentTime,
    setLocalSrc,
    setLocalDuration
} from './actionCreators';
import {
    uploadPath
} from '../../constants'

@withRouter
@connect(
    ({ uploader, mainDjController }) => ({ ...uploader, ...mainDjController}),
    linkActions( setLocalPlayPause, setLocalVolume, setLocalCurrentTime, setLocalSrc, setLocalDuration )
)
export default class DjController extends Component {

    componentWillMount(){
        const {
            playlist_one,
            playlist_two,
            history
        } = this.props;

        if( playlist_one.length === 0 && playlist_two.length === 0 ) {
            history.push(uploadPath);
        }
    }

    render(){
        const {
            playlist_one,
            playlist_two,
            playlistOne,
            playlistTwo,
            commonVolume,
            setLocalPlayPause,
            setLocalVolume,
            setLocalCurrentTime,
            setLocalSrc,
            setLocalDuration
            } = this.props;

        return (
            <div className="dj-controller">
                <MainDjController/>

                <div className="controllers-wrap">
                    { playlist_one.length > 0 &&
                        <MusicController
                            setLocalPlayPause={ setLocalPlayPause }
                            setLocalVolume={ setLocalVolume }
                            commonVolume={ commonVolume }
                            playlist={ playlist_one }
                            setLocalCurrentTime={ setLocalCurrentTime }
                            setLocalSrc={ setLocalSrc }
                            setLocalDuration={ setLocalDuration }
                            id="playlistOne"
                            {...playlistOne} />
                    }
                    { playlist_two.length > 0 &&
                        <MusicController
                            setLocalPlayPause={ setLocalPlayPause }
                            setLocalVolume={ setLocalVolume }
                            commonVolume={ commonVolume }
                            playlist={ playlist_two }
                            setLocalCurrentTime={ setLocalCurrentTime }
                            setLocalSrc={ setLocalSrc }
                            setLocalDuration={ setLocalDuration }
                            id="playlistTwo"
                            { ...playlistTwo }/>
                    }
                </div>
            </div>
        )
    }
}