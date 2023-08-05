import React from "react";
import "./style.css";

const Book = () => {
  return (
    <section className="meeting">
      <div className="backgroundBook">
        <div className="container">
          <div className="bookWrap">
            <div className="booking">
              <div className="leftBook">
                <div className="texts">
                  <h2>Book an Appointment</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque placerat scelerisque tortor ornare ornare. Convallis
                    felis vitae tortor augue. Velit nascetur proin massa in.
                    Consequat faucibus porttitor enim et.
                  </p>
                </div>
              </div>
              <div className="rightBook">
                <div className="demographics">
                  <div className="nameMail">
                    <div className="div name">
                      <select>
                        <option value="shif">Shifoxonalar</option>
                        <option value="tashmi">Toshmi</option>
                        <option value="sampi">Sampi</option>
                        <option value="juk">Star Med</option>
                        <option value="ank">Ankologicheskiy</option>
                        <option value="ank">Jukovskiy</option>
                      </select>
                    </div>
                    <div id="email" className="div">
                      <select>
                        <option value="shif">Xizmatlar</option>
                        <option value="tashmi">Stomatolog</option>
                        <option value="sampi">Xirurg</option>
                        <option value="juk">Nevrolog</option>
                        <option value="ank">Urolog</option>
                        <option value="ank">Ginekolog</option>
                        <option value="ank"></option>
                        <option value="ank">Urologiya</option>
                        <option value="ank">Urologiya</option>
                      </select>
                    </div>
                  </div>
                  <div id="doctor" className="div name">
                    <select>
                      <option value="shif">Shifokorlar</option>
                      <option value="tashmi">Umar Forsiy</option>
                      <option value="sampi">Akobir Batchan</option>
                      <option value="juk">Sardor Hon</option>
                      <option value="ank">Alisher Navoiy</option>
                    </select>
                  </div>
                  <div className="nameMail">
                    <div id="turn" className="common">
                      <input type="text" placeholder="Name" />
                    </div>
                    <div id="turn" className="common">
                      <input type="email" placeholder="Email" />
                    </div>
                    <div id="turns" className="common">
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
        </div>
      </div>
    </section>
  );
};

export default Book;
