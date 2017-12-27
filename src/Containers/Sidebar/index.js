/**
 * Created by Александр on 24.12.2017.
 */
import React, { PureComponent } from 'react';
import { NavLink }              from 'react-router-dom';
import { connect }              from 'react-redux';
import { withRouter }           from 'react-router';
import {
    uploadPath,
    djControllerPath
} from '../../constants'

@withRouter
@connect( ({ uploader }) => uploader )
export default class Sidebar extends PureComponent {
    render(){
        const {
            playlist_one,
            playlist_two,
        } = this.props;

        const djControllerClassName = playlist_one.length > 0 || playlist_two.length > 0 ? '' : 'forbid-link-action';

        return (
            <nav className="sidebar">
                <ul>
                    <li>
                        <NavLink activeStyle={{ fontWeight: 'bold' }} to={ uploadPath } >Upload</NavLink>
                    </li>
                    <li className={ djControllerClassName }>
                        <NavLink activeStyle={{ fontWeight: 'bold' }} to={ djControllerPath } >Dj-controller</NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}