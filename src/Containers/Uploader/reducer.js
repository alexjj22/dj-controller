/**
 * Created by Александр on 24.12.2017.
 */

const initialState = {
    listIndicator: 'first'
};

export default function uploader(state = initialState, { type, payload, meta } = {}) {
    switch (type) {
        case 'ololo':
            return { ...state, ...payload };

        default:
            return state;
    }
}