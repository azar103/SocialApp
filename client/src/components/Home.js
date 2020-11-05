import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="body-container">
      <div className="mt-5 shortcuts_container">
        <h3>Shortcuts</h3>
        <hr />
      </div>
      <div className="description_container mt-5 row">
        <img
          src="https://randomuser.me/api/portraits/women/18.jpg"
          width="80"
          height="80"
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <textarea
            className="ml-4"
            placeholder="Write something..."
            rows="10"
          />
          <button className="btn btn-primary bouton">Post</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
