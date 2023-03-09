import React from "react";
import { Route, Routes } from "react-router-dom";
import Needs from "../components/NeedsComponent";

export default function PageRouter() {
  return (
    <Routes>
      <Route path="" element={<Needs />} />
      <Route path=":id" element={<Needs />} />
    </Routes>
  );
}
