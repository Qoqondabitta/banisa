import React from "react";
import "./style.css";

const Touch = () => {
  return (
    <section>
      <div className="container">
        <div className="touchWrap">
          <div className="left">
            <div className="up">
              <h3>Get in touch</h3>
              <h2>Contact</h2>
            </div>
            <div className="down">
              <div className="nameMail">
                <div className="div name">
                  <input type="text" placeholder="Name" />
                </div>
                <div id="email" className="div">
                  <input type="email" placeholder="Email" />
                </div>
              </div>
              <div className="subject">
                <input type="text" placeholder="Subject" />
              </div>
              <div className="message">
                <input type="text" placeholder="Message" />
              </div>
              <div className="submitButton">
                <button type="submit">Submit</button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="horizon">
              <div className="contactCards">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="41"
                    height="39"
                    viewBox="0 0 41 39"
                    fill="none"
                  >
                    <path
                      d="M24.1459 33.1261C24.7275 32.7903 25.1502 32.2345 25.3211 31.5809C25.4921 30.9273 25.3972 30.2295 25.0574 29.6409L23.7761 27.4217C23.4363 26.8332 22.8794 26.4021 22.2279 26.2233C21.5764 26.0446 20.8837 26.1328 20.3022 26.4685C15.9167 29.0005 13.3542 24.5621 12.073 22.3429C10.7917 20.1237 8.2292 15.6853 12.6146 13.1534C13.1962 12.8176 13.6189 12.2618 13.7899 11.6082C13.9608 10.9546 13.8659 10.2568 13.5261 9.66824L12.2449 7.44905C11.9051 6.86048 11.3481 6.4294 10.6966 6.25064C10.0452 6.07187 9.35244 6.16007 8.77089 6.49583C3.28908 9.66074 1.28125 13.7789 7.68751 24.8748C14.0938 35.9708 18.6641 36.291 24.1459 33.1261Z"
                      stroke="#1F2B6C"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M35.8156 23.962C36.9804 19.4988 36.3314 14.7345 34.0113 10.7159C31.6911 6.6973 27.8896 3.75311 23.442 2.53019M29.1022 22.1199C29.4492 20.7944 29.5324 19.4103 29.3472 18.0468C29.162 16.6833 28.7119 15.3671 28.0227 14.1734C27.3335 12.9796 26.4187 11.9318 25.3305 11.0896C24.2423 10.2475 23.002 9.62754 21.6806 9.26527M22.4248 20.2644C22.6577 19.3713 22.5277 18.418 22.0635 17.6139C21.5993 16.8099 20.8387 16.2207 19.9488 15.9758"
                      stroke="#1F2B6C"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="scripts">
                  <h3>EMERGENCY</h3>
                  <h4>(237) 681-812-255</h4>
                  <h4>(237) 666-331-894</h4>
                </div>
              </div>
              <div className="contactCards">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="39"
                    viewBox="0 0 32 39"
                    fill="none"
                  >
                    <path
                      d="M1 15.4C1 29.8 16 37 16 37C16 37 31 29.8 31 15.4C31 7.45 24.2875 1 16 1C7.7125 1 1 7.45 1 15.4Z"
                      stroke="#BFD2F8"
                      stroke-width="2"
                    />
                    <path
                      d="M16.0001 20.32C18.8499 20.32 21.1601 18.0098 21.1601 15.16C21.1601 12.3102 18.8499 10 16.0001 10C13.1503 10 10.8401 12.3102 10.8401 15.16C10.8401 18.0098 13.1503 20.32 16.0001 20.32Z"
                      stroke="#159EEC"
                      stroke-width="2"
                    />
                  </svg>
                </div>
                <div className="scripts">
                  <h3>LOCATION</h3>
                  <h4>0123 Some place</h4>
                  <h4>9876 Some country</h4>
                </div>
              </div>
            </div>
            <div className="horizon">
              <div className="contactCards">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="39"
                    height="32"
                    viewBox="0 0 39 32"
                    fill="none"
                  >
                    <path
                      d="M1.7998 1H37.1998V30.5H1.7998V1Z"
                      stroke="#1F2B6C"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M37.1998 6.8999L19.4998 18.6999L1.7998 6.8999"
                      stroke="#1F2B6C"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="scripts">
                  <h3>EMAIL</h3>
                  <h4>fildineeesoe@gmil.com</h4>
                  <h4>myebstudios@gmail.com</h4>
                </div>
              </div>
              <div className="contactCards">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                  >
                    <path
                      d="M16.6777 31C24.962 31 31.6777 24.2843 31.6777 16C31.6777 7.71573 24.962 1 16.6777 1C8.39346 1 1.67773 7.71573 1.67773 16C1.67773 24.2843 8.39346 31 16.6777 31Z"
                      stroke="#1F2B6C"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M21.6777 23.5L16.6777 16V6"
                      stroke="#1F2B6C"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                <div className="scripts">
                  <h3>WORKING HOURS</h3>
                  <h4>Mon-Sat 09:00-20:00</h4>
                  <h4>Sunday Emergency only</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Touch;
