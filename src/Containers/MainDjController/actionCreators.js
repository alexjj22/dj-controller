/**
 * Created by Александр on 26.12.2017.
 */
import {
    SET_COMMON_PLAY_PAUSE,
    SET_COMMON_VOLUME
} from './constants';

export const setCommonPlayPause = ( bool ) => {
    return {
        type: SET_COMMON_PLAY_PAUSE,
        payload: {
            isPlaying: bool
        }
    }
};

export const setCommonVolume = ( volume ) => {
    return {
        type: SET_COMMON_VOLUME,
        payload: {
            volume
        }
    }
};