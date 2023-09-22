import { combineReducers, configureStore } from "@reduxjs/toolkit";

import mainReducer from "../reducers";

const rootReducer = combineReducers({
  jobs: mainReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
