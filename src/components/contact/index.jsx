import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const next = () => navigate(1);
  const move = () => navigate(-1);
  return (
    <section className="aloqa">
      <div className="shadow">
        <div className="container">
          <div className="aloqaWrap">
            <div className="texts">
              <p>
                <span onClick={move}>Home </span>/<span onClick={next}> Contact </span>
              </p>
              <h2>Our Contacts</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
