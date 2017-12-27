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
} from './actions';

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
    ({ uploader }) => uploader,
    linkActions( setPlaylistIndicator, addToPlaylist, removeSongFromPlaylistOne, removeSongFromPlaylistTwo )
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

    render(){
        const {
            indicatorsList,
            indicator,
            setPlaylistIndicator,
            playlist_one,
            playlist_two,
            removeSongFromPlaylistOne,
            removeSongFromPlaylistTwo
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
                        onDelete={ removeSongFromPlaylistOne }
                        playlistId="one"
                    />
                    <MusicList
                        musicList={ playlist_two }
                        onDelete={ removeSongFromPlaylistTwo }
                        playlistId="two"
                    />
                </div>
            </div>
        )
    }
}