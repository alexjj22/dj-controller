/**
 * Created by Александр on 28.12.2017.
 */
import React from 'react';

const Speed = ({ speed, onChange }) => {
    return (
        <div className="speed" >
            <i className="fa fa-rocket" aria-hidden="true"/>
            <input
                type="range"
                value={ speed }
                step="0.01"
                onChange={ e => onChange( Number(e.target.value) ) }
                min="0.5" max="2" />
        </div>
    )
}

export default Speed;