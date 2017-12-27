/**
 * Created by Александр on 27.12.2017.
 */
import React from 'react';

const Next = ({ clickHandler, fontSize }) => {
    return (
        <i
            style={{ fontSize: fontSize }}
            className="fa fa-forward"
            aria-hidden="true"
            onClick={ clickHandler }
        />
    )
}

export default Next;