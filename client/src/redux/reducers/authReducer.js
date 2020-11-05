import {
  GET_AUTH_USER,
  IS_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_SUCCESS,
} from "../actions/actionTypes";

const inititialState = {
  isLoading: false,
  isAuth: false,
  user: null,
  token: localStorage.getItem("token"),
  msg: null,
};

const authReducer = (state = inititialState, { type, payload }) => {
  switch (type) {
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        ...payload,
      };
    case GET_AUTH_USER:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        ...payload,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case LOGOUT:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        user: null,
        token: null,
      };

    default:
      return state;
  }
};

export default authReducer;
