import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/actions/authActions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onLogin = (e) => {
    e.preventDefault();
    const formData = { email, password };
    dispatch(loginUser(formData));
  };
  if (isAuth) {
    return <Redirect to="/" />;
  }
  return (
    <div className="container mt-5 form_container">
      <h2>Login </h2>
      <form onSubmit={onLogin}>
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
        <Link to="/signup">Don't have an account ?</Link> <br />
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
