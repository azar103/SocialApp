import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/actions/authActions";
import { useSelector } from "react-redux";
import "./Singup.css";
import { Redirect } from "react-router";
const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const signup = (e) => {
    e.preventDefault();
    const formData = { userName, email, password, confirmPassword };
    dispatch(registerUser(formData));
  };
  if (isAuth) {
    return <Redirect to="/" />;
  }
  return (
    <div className="container mt-5 form_container">
      <h2>Signup</h2>
      <form onSubmit={signup}>
        <div className="form-group">
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={userName}
            onChange={onChangeUserName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={email}
            onChange={onChangeEmail}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={onChangePassword}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
          />
        </div>
        <button className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Signup;
