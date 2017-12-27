/**
 * Created by Александр on 25.12.2017.
 */
import React, { Component } from 'react';


const Idicators = ({ indicators, checked, onChange }) => {
    const text = 'Add to playlist ';

    return (
        <ul className="indicators">
            {
                indicators.map( (item, i) => {
                    return (
                        <li key={ item+i }>
                            <label>
                                <input
                                type="radio"
                                name="indicator"
                                checked={ item === checked }
                                onChange={ () => onChange( item )} />
                                { text + item }
                            </label>
                        </li>
                    )
                })
            }
        </ul>
    )
};

export default Idicators;