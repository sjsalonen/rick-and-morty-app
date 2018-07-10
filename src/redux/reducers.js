import { SET_RESULTS, SET_INFO, CHANGE_PAGE } from "./actions";

const DEFAULT_STATE = {
    results: [],
    info: {},
    page: 1
}

const setResults = (state, action) => 
    Object.assign({}, state, { results: action.payload }
);

const setInfo = (state, action) => 
    Object.assign({}, state, { info: action.payload }
);

const changePage = (state, action) => 
    Object.assign({}, state, { page: action.payload }
);

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_RESULTS:
      return setResults(state, action);
    case SET_INFO:
      return setInfo(state, action);
    case CHANGE_PAGE:
      return changePage(state, action);
    default:
      return state;
  }
};

export default rootReducer;