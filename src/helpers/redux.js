/**
 * Created by Александр on 25.12.2017.
 */
import { bindActionCreators } from 'redux';

function createActionsFromFunction(func){
    return { [func.name]: func }
}

export function linkActions(...actions){
    let resultActions = {};

    for (let action of actions) {
        if (!(typeof action === 'function' || typeof action === 'object')) throw new TypeError('Actions must be object');

        if (typeof action === 'function')
            action = createActionsFromFunction(action);

        resultActions = Object.assign(resultActions, action)
    }

    return dispatch => bindActionCreators(resultActions, dispatch);
}