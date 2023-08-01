import React from "react";
import "./style.css";
import Welcome from "../welcome";
import Shifoxonalar from "../shifoxalar";
import MiniContact from "../minicontact";

const Home = () => {
  return (
    <>
      {/* main section  */}
      <div className="wrapper">
        <div className="container">
          <div className="wrapper-card">
            <div className="home-card">
              <h4 className="home-subtitle">Caring for Life</h4>
              <h1 className="home-title">
                Leading the Way <br /> in Medical Excellence
              </h1>
              <button className="btn-blue">Our Services</button>
            </div>
          </div>
        </div>
      </div>

      {/* welcome section  */}
      <Welcome />
      {/* shifoxonalar section  */}
      <Shifoxonalar />
      {/* contact  */}
      <MiniContact />
    </>
  );
};

export default Home;
