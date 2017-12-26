/**
 * Created by Александр on 24.12.2017.
 */
import React, { Component } from 'react';
import MusicController      from '../../Components/MusicController/index';
import MainDjController     from '../MainDjController/index'
import { connect }          from 'react-redux';
import './style.css';

@connect(({ uploader }) => uploader)
export default class DjController extends Component {
    render(){
        const {
            playlist_one,
            playlist_two
            } = this.props;

        return (
            <div className="dj-controller">
                <MainDjController/>

                { playlist_one.length > 0 && <MusicController playlist={ playlist_one }/> }
                { playlist_two.length > 0 && <MusicController playlist={ playlist_two }/> }

            </div>
        )
    }
}