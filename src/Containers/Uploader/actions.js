/**
 * Created by Александр on 25.12.2017.
 */
import {
    ADD_TO_PLAYLIST,
    SET_PLAYLIST_INDICATOR,
    REMOVE_SONG_FROM_PLAYLIST_ONE,
    REMOVE_SONG_FROM_PLAYLIST_TWO
} from './constants';

export const addToPlaylist = ( playlist, indicator ) => {
    return {
        type: ADD_TO_PLAYLIST,
        payload: {
            [`playlist_${indicator}`]: playlist
        }
    }
};

export const setPlaylistIndicator = indicator => {
    return {
        type: SET_PLAYLIST_INDICATOR,
        payload: {
            indicator
        }
    }
};

export const removeSongFromPlaylistOne = songName => {
    return {
        type: REMOVE_SONG_FROM_PLAYLIST_ONE,
        payload: {
            songName
        }
    }
};

export const removeSongFromPlaylistTwo = songName => {
    return {
        type: REMOVE_SONG_FROM_PLAYLIST_TWO,
        payload: {
            songName
        }
    }
};