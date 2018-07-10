import { SET_RESULTS, SET_INFO } from "./actions";

const DEFAULT_STATE = {
    results: [],
    info: {}
}

const setResults = (state, action) => 
    Object.assign({}, state, { results: action.payload }
);

const setInfo = (state, action) => 
    Object.assign({}, state, { info: action.payload }
);

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_RESULTS:
      return setResults(state, action);
    case SET_INFO:
      return setInfo(state, action);
    default:
      return state;
  }
};

export default rootReducer;