import React, { useState } from "react";
import { Link } from "react-router-dom";
import List from "../Component/list";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Index = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <List/>
          <div className="col-md-9 customSplash bg-light">
            <h6 className="custSelectCenter">
              Please select a chat to start messaging
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
