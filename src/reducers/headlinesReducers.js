import {
    GET_ALL_HEADLINES_STARTED,
    GET_ALL_HEADLINES_DONE,
    GET_ALL_HEADLINES_FAILED,
    // SEARCH_ALL_HEADLINES_STARTED,
    // SEARCH_ALL_HEADLINES_FAILED,
    // SEARCH_ALL_HEADLINES_DONE
} from "../types/types";

export const headlinesReducer = (state = [], action) => {
    switch (action.type) {
        case GET_ALL_HEADLINES_STARTED:
            return Object.assign({}, state, {
                headlinesLoading: true
            })
        case GET_ALL_HEADLINES_DONE:
            return Object.assign({}, state, {
                availableHeadlines: action.headlines,
                headlinesLoading: false
            });
        case GET_ALL_HEADLINES_FAILED:
            return Object.assign({}, state, {
                headlinesError: true
            });
        default:
            return state;
    }
}