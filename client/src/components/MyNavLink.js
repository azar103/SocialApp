import React from "react";
import { Link } from "react-router-dom";

const MyNavLink = ({ children, url }) => {
  return (
    <li className="nav-item active" style={{ backgroundColor: "#F8F9FA" }}>
      <Link className="nav-link" to={url}>
        {children}
      </Link>
    </li>
  );
};

export default MyNavLink;
