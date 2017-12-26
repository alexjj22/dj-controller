/**
 * Created by Александр on 26.12.2017.
 */
import React, { Component } from 'react';

const TrackProgress = ({ current ,duration, onChange }) => {
    return (
        <input
            ref={(slider) => { this.slider = slider }}
            type="range"
            value={ current }
            onChange={ e => onChange(e.target.value) }
            min="0" max={ duration } />
    )
}

export default TrackProgress