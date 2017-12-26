/**
 * Created by Александр on 26.12.2017.
 */
import {
    SET_COMMON_PLAY_PAUSE,
    SET_COMMON_VOLUME
} from './constants';

const initialState = {
    isPlaying: false,
    volume: 1
};

export default function mainDjController(state = initialState, { type, payload, meta } = {}) {
    switch (type) {
        case SET_COMMON_PLAY_PAUSE:
        case SET_COMMON_VOLUME:
            return { ...state, ...payload };

        default:
            return state;
    }
}