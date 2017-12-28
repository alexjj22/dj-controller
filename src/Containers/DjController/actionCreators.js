/**
 * Created by Александр on 26.12.2017.
 */
import {
    SET_COMMON_PLAY_PAUSE,
    SET_COMMON_VOLUME,
    SET_LOCAL_PLAY_PAUSE,
    UPDATE_PLAYLIST_SETTINGS
} from './constants';

export const setCommonPlayPause = ( bool ) => {
    return {
        type: SET_COMMON_PLAY_PAUSE,
        payload: {
            isPlayingCommon: bool
        }
    }
};

export const setCommonVolume = commonVolume => {
    return {
        type: SET_COMMON_VOLUME,
        payload: {
            commonVolume
        }
    }
};

export const setLocalPlayPause = ( bool, id ) => {
    return {
        type: SET_LOCAL_PLAY_PAUSE,
        payload: {
            isPlaying: bool,
            id
        }
    }
};

export const updatePlaylistSettings = ( settingsObj, id ) => {
    return {
        type: UPDATE_PLAYLIST_SETTINGS,
        payload: {
            settingsObj,
            id
        }
    }
};
