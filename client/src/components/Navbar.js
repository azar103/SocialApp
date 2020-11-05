import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import authReducer from "../redux/reducers/authReducer";
import { logout } from "../redux/actions/authActions";
import MyNavLink from "./MyNavLink";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <nav
      style={{
        boxShadow: "5px 5px 15px -10px #000000",
        backgroundColor: "#FFFFFFF",
      }}
      className="navbar navbar-expand-lg navbar-light bg-light"
    >
      <Link className="navbar-brand" to="/">
        <span style={{ fontWeight: "bold" }}>Social</span> App
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
        style={{ backgroundColor: "#F8F9FA" }}
      >
        <ul className="navbar-nav ml-auto navbar-right">
          {isAuth ? (
            <li
              className="nav-item active"
              style={{ backgroundColor: "#F8F9FA" }}
            >
              <Link
                className="nav-link"
                to="/login"
                onClick={() => {
                  onLogout();
                }}
              >
                Logout
              </Link>
            </li>
          ) : (
            <>
              <MyNavLink url="/login">Login</MyNavLink>
              <MyNavLink url="/signup">SignUp</MyNavLink>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
