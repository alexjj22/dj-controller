/**
 * Created by Александр on 26.12.2017.
 */

import React, { Component } from 'react';

const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

const Volume = ({ value, onChange }) => {
    return (
        <div className="volume" style={ style }>
            <i className="fa fa-volume-up" aria-hidden="true"/>
            <input
                type="range"
                value={ value }
                step="0.01"
                onChange={ e => onChange(e.target.value) }
                min="0" max="1" />
        </div>
    )
}

export default Volume;