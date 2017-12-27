/**
 * Created by Александр on 24.12.2017.
 */
import React, { PureComponent } from 'react';
import { Link }                 from 'react-router-dom';
import { connect }              from 'react-redux';
import { withRouter }           from 'react-router';

@withRouter
@connect( ({ uploader }) => uploader )
export default class Sidebar extends PureComponent {
    render(){
        const {
            playlist_one,
            playlist_two,
            location : {
                pathname
            }
        } = this.props;

        const uploadPath = '/upload';
        const djControllerPath = playlist_one.length > 0 || playlist_two.length > 0 ? '/dj-controller' : '/upload';

        return (
            <nav className="sidebar">
                <ul>
                    <li><Link to={ uploadPath } >Upload</Link></li>
                    <li><Link to={ djControllerPath } >Dj-controller</Link></li>
                </ul>
            </nav>
        )
    }
}