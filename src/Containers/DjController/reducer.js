/**
 * Created by Александр on 26.12.2017.
 */
import {
    SET_COMMON_PLAY_PAUSE,
    SET_COMMON_VOLUME,
    SET_LOCAL_PLAY_PAUSE,
    SET_LOCAL_VOLUME
} from './constants';

const initialState = {
    isPlayingCommon: false,
    commonVolume: 1,
    playlistOne: {
        isPlaying: false,
        volume: 1,
        speed: 1,
        currentTime: 0,
        duration: 0,
        src: ''
    },
    playlistTwo: {
        isPlaying: false,
        volume: 1,
        speed: 1,
        currentTime: 0,
        duration: 0,
        src: ''
    }
};

export default function mainDjController(state = initialState, { type, payload } = {}) {
    const { isPlayingCommon, commonVolume, playlistOne, playlistTwo } = state;

    switch (type) {
        case SET_LOCAL_VOLUME:
        case SET_COMMON_VOLUME:
            return { ...state, ...payload };

        case SET_LOCAL_PLAY_PAUSE:
            const updatedState = {
                ...state,
                ...{ [payload.id]: {...state[payload.id], isPlaying: payload.isPlaying }}
            };
            updatedState.isPlayingCommon = updatedState.playlistOne.isPlaying && updatedState.playlistTwo.isPlaying;
            return updatedState;

        case SET_COMMON_PLAY_PAUSE:
            return {
                ...state,
                ...payload,
                ...playlistOne.isPlaying = payload.isPlayingCommon,
                ...playlistTwo.isPlaying = payload.isPlayingCommon
            };

        default:
            return state;
    }
}