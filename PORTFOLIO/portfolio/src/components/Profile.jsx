import React from "react";
import "../styles/profile.css";
import profilepic from "../images/profile-pic.png";

// import Link from "react-router-dom"

const Profile = () => {
  return (
    <div id="profileDiv">
      <div id="profile-left">
        <div id="profile-left-1">
          <div id="greet-hi">Hi, My Name is</div>
          <div id="name">Mahesh Raut</div>
          <div className="typewriter">
            <p>Full Stack Web Developer</p>
          </div>
          <div id="view-resume">
            <div>
              <a
                style={{ textDecoration: "none", color: "rgb(201, 209, 231)" }}
                href="https://drive.google.com/file/d/15a3J89NVCQhq0Y7SDMZ-Xl6qh14xXY0Z/view" target="_blank"
              >
                View Resume
              </a>
            </div>
            <div>
              <i className="fas fa-file-download" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>

      <div id="dp-Div">
        <div id="dp">
          <img id="img-dp" src={profilepic} />
        </div>
      </div>

      <div id="links">
        <div id="linkedin">
          <a href="https://www.linkedin.com/in/mahesh-raut-886387195/" target="_blank">
            <span className="iconify" data-icon="feather:linkedin"></span>
          </a>
        </div>
        <div id="gitHub">
          <a href="https://github.com/Rautmahi" target="_blank">
            <span className="iconify" data-icon="feather:github"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
