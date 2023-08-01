import React from "react";
import "./style.css";
import { Icon } from "./style";

const MiniCard = () => {
  return (
    <section className="minicard">
      <div className="container">
        <div className="minicard-title">
          <h4 className="global-subtitle">Get in touch</h4>
          <h2 className="global-title">Contact</h2>
        </div>

        <div className="minicontact-cards">
          <div className="minicontact-card">
            <Icon.Call />
            <h4>Emergency</h4>
            <p>(237) 681-812-255</p>
            <p>(237) 666-331-894</p>
          </div>
          <div className="minicontact-card">
            <Icon.Location />
            <h4>Emergency</h4>
            <p>(237) 681-812-255</p>
            <p>(237) 666-331-894</p>
          </div>
          <div className="minicontact-card">
            <Icon.Email />
            <h4>Emergency</h4>
            <p>(237) 681-812-255</p>
            <p>(237) 666-331-894</p>
          </div>
          <div className="minicontact-card">
            <Icon.Hour />
            <h4>Emergency</h4>
            <p>(237) 681-812-255</p>
            <p>(237) 666-331-894</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniCard;
