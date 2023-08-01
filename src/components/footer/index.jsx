import React from "react";
import "./style.css";
import { FaSquareFacebook, FaTelegram, FaTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const onClick = () => navigate("/");

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-cards">
          <div className="footer-card">
            <h2 onClick={onClick}>Meddical</h2>
            <p>Leading the Way in Medical Execellence, Trusted Care.</p>
          </div>
          <div className="footer-card">
            <h4>Important Links</h4>
            <p>Appointment</p>
            <p>Doctors</p>
            <p>Services</p>
            <p>About Us</p>
          </div>
          <div className="footer-card">
            <h4>Contact Us</h4>
            <p>Call: (237) 681-812-255</p>
            <p>Email: fildineesoe@gmail.com</p>
            <p>Address: 0123 Some place</p>
            <p>Some country</p>
          </div>
          <div className="footer-card">
            <h4>Newsletter</h4>
            <div className="footer-input">
              <input placeholder="Enter your email address" type="text" />
              <img
                src={require("../../assets/icons/telegram.png")}
                alt="telegram"
              />
            </div>
          </div>
        </div>
        <div className="footer-end">
          <p>© 2021 Hospital’s name All Rights Reserved by PNTEC-LTD</p>
          <div className="footer-end__icons">
            <div className="icon-wrapper">
              <FaSquareFacebook />
            </div>
            <div className="icon-wrapper">
              <FaTelegram />
            </div>
            <div className="icon-wrapper">
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
