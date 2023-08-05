import React, { useState } from "react";
import Modalka from "../modalka";
import "./style.css";

const Doctors = () => {
  const [display, setDisplay] = useState(false);
  return (
    <div>
      <section className="doctors">
        <div className="container">
          <div className="doctorWrap">
            <img src={require("../../assets/images/Rectangle 20.png")} alt="" />
            <div className="rightDoctor">
              <h2>Shifokor</h2>
              <div className="doctorDetails">
                <div className="answer">
                  <h4>Shifokor</h4>
                  <h4>Mutahasislik</h4>
                  <h4>Ish Vaqti</h4>
                  <h4>Etaj</h4>
                  <h4>Mijozlar Soni</h4>
                  <h4>Xozir</h4>
                  <h4>5 - mijoz</h4>
                </div>
                <div id="answer" className="answer">
                  <select
                    name=""
                    id=""
                    style={{
                      borderRadius: "5px",
                      background: "var(--accent, #bfd2f8)",
                      backgroundColor: "var(--c3)",
                      border: "none",
                      color: "var(--primary, #1f2b6c)",
                      padding: "5px 80px 5px 10px",
                      width: "100%",
                    }}
                  >
                    <option value="">Ahmad Soipov</option>
                    <option value="">Anvar eshmatov</option>
                    <option value="">toshmat Goypnazarov</option>
                  </select>

                  <select
                    name=""
                    id=""
                    style={{
                      borderRadius: "5px",
                      color: "var(--primary, #1f2b6c)",
                      backgroundColor: "var(--accent, #bfd2f8)",
                      border: "none",
                      padding: "5px 80px 5px 10px",
                      width: "100%",
                    }}
                  >
                    <option value="">Terapevt</option>
                    <option value="">Xirurg</option>
                    <option value="">Stomatolog</option>
                  </select>

                  <select
                    name=""
                    id=""
                    style={{
                      borderRadius: "5px",
                      color: "var(--primary, #1f2b6c)",
                      backgroundColor: "var(--accent, #bfd2f8)",
                      border: "none",
                      padding: "5px 80px 5px 10px",
                      width: "100%",
                    }}
                  >
                    <option value="">9:00 - 16:00</option>
                    <option value="">8:00 - 16:00</option>
                    <option value="">7:00 - 16:00</option>
                  </select>

                  <select
                    name=""
                    id=""
                    style={{
                      borderRadius: "5px",
                      color: "var(--primary, #1f2b6c)",
                      backgroundColor: "var(--accent, #bfd2f8)",
                      border: "none",
                      padding: "5px 80px 5px 10px",
                      width: "100%",
                    }}
                  >
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                  </select>

                  <select
                    name=""
                    id=""
                    style={{
                      borderRadius: "5px",
                      color: "var(--primary, #1f2b6c)",
                      backgroundColor: "var(--accent, #bfd2f8)",
                      border: "none",
                      padding: "5px 80px 5px 10px",
                      width: "100%",
                    }}
                  >
                    <option value="">12</option>
                    <option value="">10</option>
                    <option value="">8</option>
                  </select>

                  <select
                    name=""
                    id=""
                    style={{
                      borderRadius: "5px",
                      color: "var(--primary, #1f2b6c)",
                      backgroundColor: "var(--accent, #bfd2f8)",
                      border: "none",
                      padding: "5px 80px 5px 10px",
                      width: "100%",
                    }}
                  >
                    <option value="">6</option>
                    <option value="">7</option>
                    <option value="">8</option>
                  </select>

                  <select
                    name=""
                    id=""
                    style={{
                      borderRadius: "5px",
                      color: "var(--primary, #1f2b6c)",
                      backgroundColor: "var(--accent, #bfd2f8)",
                      border: "none",
                      padding: "5px 80px 5px 10px",
                      width: "100%",
                    }}
                  >
                    <option value="">32 daqiqa</option>
                    <option value="">10 daqiqa</option>
                    <option value="">8 daqiqa</option>
                  </select>
                </div>
              </div>
              <button
                onClick={() => {
                  setDisplay(!display);
                }}
              >
                Navbat Olish
              </button>
            </div>
          </div>
        </div>
      </section>
      {display && <Modalka />}
    </div>
  );
};

export default Doctors;
