import React, { useState } from "react";

import "../styles/myprojects.css";

import bewakoof from "../images/bewakoof.png";
import theoutnet from "../images/theoutnet.png";

const Myprojects = () => {
  const [links2, setLinks2] = useState(false);
  const [links3, setLinks3] = useState(false);

  return (
    <div id="myProjects_main">
      <h1
        className="myProjects_heading__phVYz"
        style={{ color: "rgb(204, 214, 246)" }}
      >
        My Projects
      </h1>
      <div className="myProjects_borderBottom__RLbe1"></div>

      {/* 1st proj */}
      <div
        id="about"
        className="Home_experience__g58MS"
        style={{ background: "rgb(15, 22, 34)" }}
      >
        <div
          onMouseEnter={() => setLinks2(true)}
          onMouseLeave={() => {
            setLinks2(false);
          }}
          className="About_container__63eab"
          style={{ boxShadow: "rgb(36, 36, 58) 3px 3px 5px" }}
        >
          <div className="About_first__P-0xg">
            <img src={theoutnet} alt="" />
          </div>

          {links2 && (
            <div
              id="projectLinks"
              style={{
                backgroundColor: "rgb(12, 20, 27)",
                boxShadow: "rgb(36, 36, 58) 3px 3px 5px",
                borderRadius: "15px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  margin: "auto",
                  width: "9rem",
                  height: "4.5rem",
                  padding: "0.5rem",
                  justifyContent: "center",
                }}
              >
                <div id="git">
                  <a
                    href="https://github.com/satyamkumarjha2002/Unit-3-project/tree/master"
                    target="_blank"
                  >
                    <span className="iconify" data-icon="feather:github"></span>
                  </a>
                </div>
                <div id="gotoProject">
                  <a
                    href="https://famous-cucurucho-613677.netlify.app/"
                    target="_blank"
                  >
                    <span class="iconify" data-icon="bx:link-external"></span>
                  </a>
                </div>
              </div>
            </div>
          )}

          <div className="About_second__g9Cy4">
            <h2
              className="About_heading__HT8z+"
              style={{ color: "rgb(204, 214, 246)" }}
            >
              Theoutnet.com Clone
            </h2>
            <div className="About_borderBottom__C8CzR"></div>
            <p
              className="About_aboutMe__Kx5NY"
              style={{ color: "rgb(137, 147, 177)" }}
            >
              Theoutnet.com is a leading E-Commerce website for all types of
              clothes, and cosmetic products are available on this website such
              as jeans, trousers, fragrances, shoes, bags, etc. for both men &
              women.
              <br />
              I was handling the front-end part and created a women's product
              page and payment page.
              <br />
              <br />
              Tech-Stacks we used to build the clone are
              <span style={{ color: "rgb(0, 160, 160)" }}>
                {" "}
                Javascript | HTML5 | CSS3 | GitHub
              </span>
              .
            </p>
          </div>
        </div>
      </div>

      {/* 2nd project */}
      <div
        id="about"
        className="Home_experience__g58MS"
        style={{ background: "rgb(15, 22, 34)" }}
      >
        <div
          onMouseEnter={() => setLinks3(true)}
          onMouseLeave={() => {
            setLinks3(false);
          }}
          className="About_container__63eab"
          style={{ boxShadow: "rgb(36, 36, 58) 3px 3px 5px" }}
        >
          <div className="About_first__P-0xg">
            <img src={bewakoof} alt="" />
          </div>

          {links3 && (
            <div
              id="projectLinks"
              style={{
                backgroundColor: "rgb(12, 20, 27)",
                boxShadow: "rgb(36, 36, 58) 3px 3px 5px",
                borderRadius: "15px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  margin: "auto",
                  width: "9rem",
                  height: "4.5rem",
                  padding: "0.5rem",
                  justifyContent: "center",
                }}
              >
                <div id="git">
                  <a
                    href="https://github.com/rajpawanku/Unit2ProjectBewakoof"
                    target="_blank"
                  >
                    <span className="iconify" data-icon="feather:github"></span>
                  </a>
                </div>
                <div id="gotoProject">
                  <a
                    href="https://radiant-alpaca-ceefd6.netlify.app/"
                    target="_blank"
                  >
                    <span class="iconify" data-icon="bx:link-external"></span>
                  </a>
                </div>
              </div>
            </div>
          )}

          <div className="About_second__g9Cy4">
            <h2
              className="About_heading__HT8z+"
              style={{ color: "rgb(204, 214, 246)" }}
            >
              Bewakoof.com Clone
            </h2>
            <div className="About_borderBottom__C8CzR"></div>
            <p
              className="About_aboutMe__Kx5NY"
              style={{ color: "rgb(137, 147, 177)" }}
            >
              Bewakoof.com is a leading E-Commerce website for all types of
              clothes and mobile accessories products are available on this
              website such as jeans, shirts, mobile covers, shoes, bags, etc.
              for both men & women.
              <br /> I was handling the front-end part and created footer,landing page and payment page.
              <br />
              <br />
              Tech-Stacks we used to build the clone are
              <span style={{ color: "rgb(0, 160, 160)" }}>
                {" "}
                Javascript | HTML5 | CSS3 | GitHub
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myprojects;
