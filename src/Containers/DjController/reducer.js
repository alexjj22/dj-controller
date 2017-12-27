/**
 * Created by Александр on 26.12.2017.
 */
import {
    SET_COMMON_PLAY_PAUSE,
    SET_COMMON_VOLUME,
    SET_LOCAL_PLAY_PAUSE,
    SET_LOCAL_VOLUME,
    SET_LOCAL_CURRENT_TIME,
    SET_LOCAL_SRC,
    SET_LOCAL_DURATION
} from './constants';

const initialState = {
    isPlayingCommon: false,
    commonVolume: 1,
    playlistOneSettings: {
        isPlaying: false,
        volume: 1,
        speed: 1,
        currentTime: 0,
        duration: 0,
        src: ''
    },
    playlistTwoSettings: {
        isPlaying: false,
        volume: 1,
        speed: 1,
        currentTime: 0,
        duration: 0,
        src: ''
    }
};

export default function mainDjController(state = initialState, { type, payload } = {}) {
    const { playlistOneSettings, playlistTwoSettings } = state;

    switch (type) {

        case SET_COMMON_VOLUME:
            return { ...state, ...payload };

        case SET_LOCAL_VOLUME:
            return {
                ...state,
                ...{ [payload.id]: {...state[payload.id], volume: payload.volume }}
            };

        case SET_LOCAL_SRC:
            return {
                ...state,
                ...{ [payload.id]: {...state[payload.id], src: payload.src, currentTime: 0, duration: 0, isPlaying: payload.isPlaying }}
            };

        case SET_LOCAL_DURATION:
            return {
                ...state,
                ...{ [payload.id]: {...state[payload.id], duration: payload.duration }}
            };

        case SET_LOCAL_PLAY_PAUSE:
            const updatedState = {
                ...state,
                ...{ [payload.id]: {...state[payload.id], isPlaying: payload.isPlaying }}
            };
            updatedState.isPlayingCommon = updatedState.playlistOneSettings.isPlaying && updatedState.playlistTwoSettings.isPlaying;
            return updatedState;

        case SET_LOCAL_CURRENT_TIME:
            return {
                ...state,
                ...{ [payload.id]: {...state[payload.id], currentTime: payload.currentTime }}
            };

        case SET_COMMON_PLAY_PAUSE:
            return {
                ...state,
                ...payload,
                ...playlistOneSettings.isPlaying = payload.isPlayingCommon,
                ...playlistTwoSettings.isPlaying = payload.isPlayingCommon
            };

        default:
            return state;
    }
}