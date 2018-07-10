import { SET_RESULTS, SET_INFO, CHANGE_PAGE} from './actions';

export function setResults(results) {
    return { type: SET_RESULTS, payload: results };
};

export function setInfo(info) {
    return { type: SET_INFO, payload: info };
};

export function changePage(page) {
    return { type: CHANGE_PAGE, payload: page };
};

