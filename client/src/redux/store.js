import { applyMiddleware, createStore, compose } from "redux";

import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
const middleware = [thunk];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(...middleware))
);

export default store;
