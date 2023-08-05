import React, { useState } from "react";
import "./style.css";

const Modalka = () => {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      {display && (
        <div className="modal">
          <div className="modalka">
            <div className="cell">
              <h2>Navbat olish</h2>
              <div className="modalDetails">
                <div id="gapModal" className="question">
                  <h4>Shifokor</h4>
                  <h4>Mutahasislik</h4>
                  <h4>Ish Vaqti</h4>
                  <h4>Etaj</h4>
                  <h4>Mijozlar Soni</h4>
                  <h4>Xozir</h4>
                  <h4>5 - mijoz</h4>
                </div>
                <div className="question">
                  <p >
                    <select
                      name=""
                      id=""
                      style={{
                        borderRadius: "5px",
                        backgroundColor: "var(--c3)",
                        border: "none",
                        padding: "5px 80px 5px 10px",
                        width: "200px",
                      }}
                    >
                      <option value="">Messi</option>
                      <option value="">Ronaldo</option>
                      <option value="">Neymar</option>
                    </select>
                  </p>

                  <p >
                    <select
                      name=""
                      id=""
                      style={{
                        borderRadius: "5px",
                        backgroundColor: "var(--c3)",
                        border: "none",
                        padding: "5px 80px 5px 10px",
                        width: "200px",
                      }}
                    >
                      <option value="">Terapevt</option>
                      <option value="">Ronaldo</option>
                      <option value="">Neymar</option>
                    </select>
                  </p>

                  <p >
                    <select
                      name=""
                      id=""
                      style={{
                        borderRadius: "5px",
                        backgroundColor: "var(--c3)",
                        border: "none",
                        padding: "5px 80px 5px 10px",
                        width: "200px",
                      }}
                    >
                      <option value="">9:00 - 16:00</option>
                      <option value="">9:00 - 16:00</option>
                      <option value="">9:00 - 16:00</option>
                    </select>
                  </p>

                  <p >
                    <select
                      name=""
                      id=""
                      style={{
                        borderRadius: "5px",
                        backgroundColor: "var(--c3)",
                        padding: "5px 80px 5px 10px",
                        border: "none",
                        width: "200px",
                      }}
                    >
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                    </select>
                  </p>

                  <p >
                    <select
                      name=""
                      id=""
                      style={{
                        borderRadius: "5px",
                        border: "none",
                        backgroundColor: "var(--c3)",
                        padding: "5px 80px 5px 10px",
                        width: "200px",
                      }}
                    >
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                    </select>
                  </p>

                  <p >
                    <select
                      name=""
                      id=""
                      style={{
                        borderRadius: "5px",
                        backgroundColor: "var(--c3)",
                        border: "none",
                        padding: "5px 80px 5px 10px",
                        width: "200px",
                      }}
                    >
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                    </select>
                  </p>

                  <p>
                    {/* <b>: </b> */}
                    <select
                      name=""
                      id=""
                      style={{
                        borderRadius: "5px",
                        backgroundColor: "var(--c3)",
                        padding: "5px 80px 5px 10px",
                        width: "200px",
                        border: "none",
                      }}
                    >
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                    </select>
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setDisplay(!display);
                }}
              >
                Bekor Qilish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modalka;
