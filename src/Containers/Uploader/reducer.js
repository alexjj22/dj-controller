/**
 * Created by Александр on 24.12.2017.
 */
import {
    ADD_TO_PLAYLIST,
    SET_PLAYLIST_INDICATOR,
    REMOVE_SONG_FROM_PLAYLIST_ONE,
    REMOVE_SONG_FROM_PLAYLIST_TWO
} from './constants';

const initialState = {
    indicator: 'one',
    indicatorsList: ['one', 'two'],
    playlist_one: [],
    playlist_two: []
};

export default function uploader(state = initialState, { type, payload, meta } = {}) {
    switch (type) {
        case SET_PLAYLIST_INDICATOR:
        case ADD_TO_PLAYLIST:
            return { ...state, ...payload };

        case REMOVE_SONG_FROM_PLAYLIST_ONE:
            const playlist_one = state.playlist_one.filter( ({ preview }) => payload.preview !== preview );
            return { ...state, playlist_one };

        case REMOVE_SONG_FROM_PLAYLIST_TWO:
            const playlist_two = state.playlist_two.filter( ({ preview }) => payload.preview !== preview );
            return { ...state, playlist_two };

        default:
            return state;
    }
}