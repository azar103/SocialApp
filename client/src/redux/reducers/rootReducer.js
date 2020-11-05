import { combineReducers } from "redux";
import authReducer from "./authReducer";
const root = combineReducers({ authReducer });

export default root;
