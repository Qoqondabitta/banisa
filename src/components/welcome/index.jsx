import React from "react";
import "./style.css";

const Welcome = () => {
  return (
    <section className="welcome">
      <div className="container">
        <div className="welcome-title">
          <h4 className="global-subtitle">Welcome to Meddical</h4>
          <h2 className="global-title top">A Great Place to Receive Care</h2>
          <p className="global-description top-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat <br /> scelerisque tortor ornare ornare. Convallis felis
            vitae tortor augue. Velit nascetur <br /> proin massa in. Consequat
            faucibus porttitor enim et.
          </p>
          <button className="btn-transparent top-30">
            <div className="welcome-btn">
              <p>Learn More</p>
              <img
                src={require("../../assets/icons/arrow.png")}
                alt="arrow logo"
              />
            </div>
          </button>
        </div>
        <div className="welcome-banner">
          <img
            className="welcome-image"
            src="https://img.freepik.com/premium-photo/group-doctors-nurses-standing-hospital-room_252847-4170.jpg?w=2000"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
