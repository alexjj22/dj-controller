/**
 * Created by Александр on 24.12.2017.
 */

import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';

import uploader from '../Containers/Uploader/reducer'

let reducer = combineReducers({
    uploader
});

const store = createStore( reducer );

export default store
