/**
 * Created by Александр on 25.12.2017.
 */
import React from 'react';

const PlayPause = ({ isPlaying, clickHandler, fontSize }) => {
    return (
        <i
            style={{ fontSize: fontSize }}
            className={ isPlaying ? 'fa fa-pause-circle' : 'fa fa-play-circle' }
            aria-hidden="true"
            onClick={ clickHandler }
        />
    )
}

export default PlayPause;