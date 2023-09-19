import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "../pages/signup/Signup";
import Login from "../pages/login/login";
import Callery from "../pages/callery/callery";
const Rout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/callery" element={<Callery />} />
      </Routes>
    </>
  );
};

export default Rout;
