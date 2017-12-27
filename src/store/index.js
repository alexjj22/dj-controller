/**
 * Created by Александр on 24.12.2017.
 */
import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import logger               from 'redux-logger';
import uploader             from '../Containers/Uploader/reducer';
import mainDjController     from '../Containers/DjController/reducer';


let reducer = combineReducers({
    uploader,
    mainDjController
});

const store = createStore( reducer, applyMiddleware(logger) );

export default store
