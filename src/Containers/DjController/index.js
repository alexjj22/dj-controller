/**
 * Created by Александр on 24.12.2017.
 */
import React, { Component } from 'react';
import MusicController      from '../../Components/MusicController/index';
import MainDjController     from './MainDjController/index'
import { connect }          from 'react-redux';
import { linkActions }      from '../../helpers/redux';
import {
    setLocalPlayPause,
    setLocalVolume
} from './actionCreators';


@connect(
    ({ uploader, mainDjController }) => ({ ...uploader, ...mainDjController}),
    linkActions( setLocalPlayPause, setLocalVolume )
)
export default class DjController extends Component {
    render(){
        const {
            playlist_one,
            playlist_two,
            playlistOne,
            playlistTwo,
            setLocalPlayPause,
            setLocalVolume
            } = this.props;

        return (
            <div className="dj-controller">
                <MainDjController/>

                <div className="controllers-wrap">
                    { playlist_one.length > 0 &&
                        <MusicController
                            setLocalPlayPause={ setLocalPlayPause }
                            setLocalVolume={ setLocalVolume }
                            playlist={ playlist_one } id="playlistOne"
                            {...playlistOne} />
                    }
                    { playlist_two.length > 0 &&
                        <MusicController
                            setLocalPlayPause={ setLocalPlayPause }
                            setLocalVolume={ setLocalVolume }
                            playlist={ playlist_two } id="playlistTwo"
                            { ...playlistTwo }/>
                    }
                </div>
            </div>
        )
    }
}