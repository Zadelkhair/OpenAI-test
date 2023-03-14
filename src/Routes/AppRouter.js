import React from "react";
import { Route, Routes } from "react-router-dom";
import Chat from "../components/ChatComponent";
import ComingSoonComponent from "../components/ComingSoon";
import Home from "../components/HomeComponent";
import LayoutComponent from "../components/Layout/LayoutComponent";
import Out from "../components/OutComponent";
import SigninComponent from "../components/SigninComponent";
import NeedsRouter from "./NeedsRouter";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<LayoutComponent />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="contact" element={<h1>Contact</h1>} />
        <Route path="needs/*" element={<NeedsRouter />} />
        <Route path="chat" element={<Chat />} />
        <Route path="out" element={<Out />} />
        <Route path="signin" element={<SigninComponent />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Route>
      <Route path="comingsoon" element={<ComingSoonComponent />} />
    </Routes>
  );
}
