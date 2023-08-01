import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/navbar";

import { navbar } from "../utils/navbar";
import Signin, { SignUp } from "../components/signup";
export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          {navbar.map(({ id, path, element }) => {
            return <Route key={id} path={path} element={element} />;
          })}
        </Route>
        <Route exact path="/" element={<Navigate to={"/home"} />} />
        <Route path="*" element={<h1>Not fount 404</h1>} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
