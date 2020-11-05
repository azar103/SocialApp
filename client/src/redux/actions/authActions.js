import axios from "axios";
import {
  GET_AUTH_USER,
  IS_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_SUCCESS,
} from "./actionTypes";

export const loginUser = (loginForm) => async (dispatch) => {
  try {
    const res = await axios.post("/api/auth/login", loginForm);
    dispatch(setLoading());
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = (registerForm) => async (dispatch) => {
  try {
    const res = await axios.post("/api/auth/signup", registerForm);
    dispatch(setLoading());
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data,
    });
  } catch (error) {}
};

export const getAuthUser = () => async (dispatch) => {
  try {
    const options = {
      headers: {
        "x-token": localStorage.getItem("token"),
      },
    };
    const res = await axios.get("/api/auth/me", options);
    dispatch(setLoading());
    dispatch({
      type: GET_AUTH_USER,
      payload: res.data,
    });
  } catch (error) {}
};
export const logout = () => {
  return {
    type: LOGOUT,
  };
};
export const setLoading = () => {
  return {
    type: IS_LOADING,
  };
};
