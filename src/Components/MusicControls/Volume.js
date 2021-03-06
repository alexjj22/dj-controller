/**
 * Created by Александр on 26.12.2017.
 */
import React from 'react';

const Volume = ({ volume, onChange }) => {
    return (
        <div className="volume" >
            <i className="fa fa-volume-up" aria-hidden="true"/>
            <input
                type="range"
                value={ volume }
                step="0.01"
                onChange={ e => onChange( Number(e.target.value) ) }
                min="0" max="1" />
        </div>
    )
}

export default Volume;