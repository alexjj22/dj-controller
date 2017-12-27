/**
 * Created by Александр on 25.12.2017.
 */
import React, { Component } from 'react';
import { getTime } from '../../helpers/common'

const Timer = ({ current, duration }) => {
    const now = getTime(current);
    const common = getTime(duration);

    return (
        <div className="timer">
            {`${now} / ${common}`}
        </div>
    )
}

export default Timer;
