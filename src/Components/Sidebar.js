/**
 * Created by Александр on 24.12.2017.
 */
import React, { Component } from 'react';
import { Link }             from 'react-router-dom';

export default class Sidebar extends Component {
    render(){
        return (
            <div className="sidebar">
                <nav>
                    <ul>
                        <li><Link to='/upload'>Upload</Link></li>
                        <li><Link to='/dj-controller'>Dj-controller</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}