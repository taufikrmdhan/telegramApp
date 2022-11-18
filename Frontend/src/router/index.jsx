import React from "react";

import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";

import Register from "../pages/Register";
import Login from "../pages/Login";
import Splash from "../pages/Splashscreen";
import Profile from "../pages/Profile";
import Chat from "../pages/Chatlist";
import Message from "../pages/Message";
import Contact from "../pages/Contactinfo";
import Update from "../pages/updateProfile";
// import Profiles from "../pages/profiles";
// import Chat from "../pages/Chat";

const PrivateRoute = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return <Outlet />;
  } else {
    alert("Please login first");
    return <Navigate to="/" />;
  }
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="splash" element={<Splash />} />
        {/* <Route path="profiles" element={<Profiles />} /> */}
        
        <Route path="message" element={<PrivateRoute />}>
          <Route index element={<Message />} />
        </Route>
        <Route path="profile" element={<PrivateRoute />}>
          <Route index element={<Profile />} />
        </Route>
        <Route path="update" element={<PrivateRoute />}>
          <Route index element={<Update />} />
        </Route>
        <Route path="chat" element={<PrivateRoute />}>
          <Route index element={<Chat />} />
        </Route>
        <Route path="contact" element={<PrivateRoute />}>
          <Route index element={<Contact />} />
        </Route>
        
        {/* <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/message" element={<Message />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/update" element={<Update />} /> */}
        {/* <Route path="/chat" element={<Chat />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
