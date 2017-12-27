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

export const setLocalVolume = ( volume, id ) => {
    return {
        type: SET_LOCAL_VOLUME,
        payload: {
            volume,
            id
        }
    }
};

export const setLocalCurrentTime = ( currentTime, id ) => {
    return {
        type: SET_LOCAL_CURRENT_TIME,
        payload: {
            currentTime,
            id
        }
    }
};

export const setLocalSrc = ( src, id ) => {
    return {
        type: SET_LOCAL_SRC,
        payload: {
            src,
            id
        }
    }
};

export const setLocalDuration = ( duration, id ) => {
    return {
        type: SET_LOCAL_DURATION,
        payload: {
            duration,
            id
        }
    }
};