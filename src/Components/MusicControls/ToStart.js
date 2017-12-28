/**
 * Created by Александр on 28.12.2017.
 */
import React from 'react';

const ToStart = ({ clickHandler, fontSize }) => {
    return (
        <i
            style={{ fontSize: fontSize }}
            className="fa fa-step-backward"
            aria-hidden="true"
            onClick={ clickHandler }
        />
    )
}

export default ToStart;