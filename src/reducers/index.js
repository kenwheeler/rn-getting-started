/* @flow */

import { combineReducers } from "redux";
import * as types from "../actions";

const data = (state = {
  isFetching: false,
  products: []
}, action) => {
  switch (action.type) {
  case types.REQUEST_DATA:
    return Object.assign({}, state, {
      isFetching: true
    });
  case types.RECEIVE_DATA:
    return Object.assign({}, state, {
      isFetching: false,
      products: action.data.items
    });
  default:
    return state;
  }
};

const rootReducer = combineReducers({
  data
});

export default rootReducer;
