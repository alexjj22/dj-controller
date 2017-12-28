/**
 * Created by Александр on 24.12.2017.
 */
import React, { Component } from 'react';
import Dropzone             from 'react-dropzone';
import { connect }          from 'react-redux';
import { linkActions }      from '../../helpers/redux';
import Idicators            from '../../Components/Indicators/index'
import MusicList            from '../../Components/MusicList/index'
import {
    setPlaylistIndicator,
    addToPlaylist,
    removeSongFromPlaylistOne,
    removeSongFromPlaylistTwo
} from './actionCreators';

import {
    updatePlaylistSettings
} from '../DjController/actionCreators'

import {
    PLAYLIST_ONE_SETTINGS,
    PLAYLIST_TWO_SETTINGS
} from '../DjController/constants';

const drugAndDropStyle = {
    width: '300px',
    height: '300px',
    border: '2px solid black',
    padding: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
};


@connect(
    ({ uploader, mainDjController }) => ({ ...uploader, ...mainDjController}),
    linkActions( setPlaylistIndicator, addToPlaylist, removeSongFromPlaylistOne, removeSongFromPlaylistTwo, updatePlaylistSettings )
)
export default class Uploader extends Component {

    upload = arr => {
        const {
            indicator,
            addToPlaylist,
        } = this.props;

        const currentPlaylist = this.props[`playlist_${indicator}`];
        const filteredSongs = arr.filter( ({ name }) => currentPlaylist.map( ({ name }) => name ).indexOf(name) < 0 );

        filteredSongs.length > 0 && addToPlaylist( [...currentPlaylist, ...filteredSongs], indicator);
    }

    onRemoveFromPlaylist = (preview, attr) => {
        const {
            updatePlaylistSettings,
            removeSongFromPlaylistOne,
            removeSongFromPlaylistTwo,
            playlistOneSettings,
            playlistTwoSettings,
        } = this.props;

        const settingsObj = {
            volume: 1,
            speed: 1,
            currentTime: 0,
            duration: 0,
            src: ''
        };

        if ( attr === 'one' ) {
            removeSongFromPlaylistOne(preview);
        }
        if ( attr === 'two' ) {
            removeSongFromPlaylistTwo(preview);
        }
        if( playlistOneSettings.src === preview ) {
            updatePlaylistSettings( settingsObj, PLAYLIST_ONE_SETTINGS )
        }

        if( playlistTwoSettings.src === preview ) {
            updatePlaylistSettings( settingsObj, PLAYLIST_TWO_SETTINGS )
        }
    }

    render(){
        const {
            indicatorsList,
            indicator,
            setPlaylistIndicator,
            playlist_one,
            playlist_two,
        } = this.props;

        return (
            <div className="uploader">
                <Idicators
                    indicators={ indicatorsList }
                    checked={ indicator }
                    onChange={ setPlaylistIndicator }
                />
                <Dropzone
                    style={ drugAndDropStyle }
                    accept=".mp3"
                    onDrop={ this.upload }
                >
                    <p>Click or Drag mp3 files here for uploading</p>
                </Dropzone>

                <div className="uploaded-playlists">
                    <MusicList
                        musicList={ playlist_one }
                        onDelete={ preview => this.onRemoveFromPlaylist(preview, "one") }
                        playlistId="one"
                    />
                    <MusicList
                        musicList={ playlist_two }
                        onDelete={preview => this.onRemoveFromPlaylist(preview, "two") }
                        playlistId="two"
                    />
                </div>
            </div>
        )
    }
}