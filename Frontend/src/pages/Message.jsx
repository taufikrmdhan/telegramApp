import React, { useState } from "react";
import { Link } from "react-router-dom";
import List from "../Component/list"
import Chat from "../Component/chat";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Index = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <List/>
          <Chat/>
        </div>
      </div>
    </div>
  );
};
export default Index;
