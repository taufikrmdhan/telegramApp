import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "../pages/Register";
import Login from "../pages/Login";
import Splash from "../pages/Splashscreen";
import Profile from "../pages/Profile";
import Chat from "../pages/Chatlist";
import Message from "../pages/Message";
import Contact from "../pages/Contactinfo";
import Update from "../pages/updateProfile";
// import Chat from "../pages/Chat";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/message" element={<Message />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/update" element={<Update />} />
        {/* <Route path="/chat" element={<Chat />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
