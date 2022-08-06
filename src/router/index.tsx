import { ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../views/auth/Login";
import { Register } from "../views/auth/Register";
import { Home } from "../views/home/index";

export const Router = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
