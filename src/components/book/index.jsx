import React from 'react'
import "./style.css";

const Book = () => {
  return (
    <section>
      <div className="container">
        <div className="booking">
          <div className="leftBook">
            <div className="texts">
              <h2>Book an Appointment</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                placerat scelerisque tortor ornare ornare. Convallis felis vitae
                tortor augue. Velit nascetur proin massa in. Consequat faucibus
                porttitor enim et.
              </p>
            </div>
          </div>
          <div className="rightBook">
            <div className="demographics">
              <div className="nameMail">
                <div className="div name">
                  <select name="" id="" value={"Shifokor"}>
                    <option value=""></option>
                  </select>
                </div>
                <div id="email" className="div">
                  <input type="email" placeholder="Email" />
                </div>
              </div>
              <div className="message">
                <input type="text" placeholder="Message" />
              </div>
              <div className="submitButton">
                <button type="submit">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Book
