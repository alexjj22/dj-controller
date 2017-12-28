/**
 * Created by Александр on 24.12.2017.
 */
import React, { Component } from 'react';
import MusicController      from './MusicController/index';
import MainDjController     from './MainDjController/index'
import { withRouter }       from 'react-router';
import { connect }          from 'react-redux';
import { linkActions }      from '../../helpers/redux';
import {
    setLocalPlayPause,
} from './actionCreators';
import {
    uploadPath
} from '../../constants'

@withRouter
@connect(
    ({ uploader, mainDjController }) => ({ ...uploader, ...mainDjController}),
    null
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
            playlistOneSettings,
            playlistTwoSettings,
        } = this.props;

        return (
            <div className="dj-controller">
                <MainDjController/>

                <div className="controllers-wrap">
                    { playlist_one.length > 0 &&
                        <MusicController
                            playlist={ playlist_one }
                            id="playlistOneSettings"
                            {...playlistOneSettings} />
                    }
                    { playlist_two.length > 0 &&
                        <MusicController
                            playlist={ playlist_two }
                            id="playlistTwoSettings"
                            { ...playlistTwoSettings }/>
                    }
                </div>
            </div>
        )
    }
}