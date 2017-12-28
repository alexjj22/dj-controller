/**
 * Created by Александр on 26.12.2017.
 */
import {
    SET_COMMON_PLAY_PAUSE,
    SET_COMMON_VOLUME,
    SET_LOCAL_PLAY_PAUSE,
    UPDATE_PLAYLIST_SETTINGS
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

        case SET_COMMON_PLAY_PAUSE:
            return {
                ...state,
                ...payload,
                ...playlistOneSettings.isPlaying = payload.isPlayingCommon,
                ...playlistTwoSettings.isPlaying = payload.isPlayingCommon
            };

        case UPDATE_PLAYLIST_SETTINGS:
            return {
                ...state,
                ...{ [payload.id]: {...state[payload.id], ...payload.settingsObj }}
            };

        case SET_LOCAL_PLAY_PAUSE:
            const updatedState = {
                ...state,
                ...{ [payload.id]: {...state[payload.id], isPlaying: payload.isPlaying }}
            };
            updatedState.isPlayingCommon = updatedState.playlistOneSettings.isPlaying || updatedState.playlistTwoSettings.isPlaying;
            return updatedState;

        default:
            return state;
    }
}