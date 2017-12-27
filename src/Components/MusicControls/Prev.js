/**
 * Created by Александр on 27.12.2017.
 */
import React from 'react';

const Prev = ({ clickHandler, fontSize }) => {
    return (
        <i
            style={{ fontSize: fontSize }}
            className="fa fa-backward"
            aria-hidden="true"
            onClick={ clickHandler }
        />
    )
}

export default Prev;