import React from "react";
import { Route, Routes } from "react-router-dom";
import Chat from "../components/ChatComponent";
import Home from "../components/HomeComponent";
import Out from "../components/OutComponent";
import NeedsRouter from "./NeedsRouter";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="about" element={<h1>About</h1>} />
      <Route path="contact" element={<h1>Contact</h1>} />
      <Route path="needs/*" element={<NeedsRouter />} />
      <Route path="chat" element={<Chat/>} />
      <Route path="out" element={<Out />} />
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
}
