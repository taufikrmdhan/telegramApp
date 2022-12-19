import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Chat from "../Component/chat";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const data = JSON.parse(localStorage.getItem("user"));
  const id_user = data.id_user;
  // console.log(id_user);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/user/list/${id_user}`)
      .then((res) => {
        // console.log(res.data.data);
        setUser(res.data.data);
        // setImage(res.data.data.image);
      })
      .catch((err) => {
        console.log("error get data");
        // console.log(err);
      });
  }, []);

  const handleBack = (e) => {
    e.preventDefault();
    navigate("/message");
  }
  return (
    <div>
      <div className="containerProfile">
        <div className="row">
          {
            user.length > 0 ? (
              user.map((item) => {
                return (
                  <div className="col-md-3 bg-white py-4 px-5">
            <div className="row mt-2">
              <div className="col-md-1 text-start ml1">
                <button
                style={{border: "none", background: "none"}}
                type="submit"
                onClick={(e) => handleBack(e)}
                >
                <i className="fa fa-angle-left grape"></i>
                </button>
              </div>
              <div className="col-md-11 text-center grape">
                <h5>@wdalm</h5>
              </div>
            </div>
            <div className="col-md-12 text-center mt-4 mb-3">
              <img
                src={`${process.env.REACT_APP_BACKEND_URL}/${item.image}`}
                alt="profile"
                className="img-fluid rounded-4"
                width={65}
                height={65}
              />
            </div>
            <div className="col-md-12 text-center">
              <h5 className="">{item.username}</h5>
            </div>
            <div className="col-md-12 text-center m1">
              <p className="text-muted">@wdalm</p>
            </div>
            <div className="col-md-12 mt-4">
              <h6>Account</h6>
            </div>
            <div className="col-md-12 mt-1">
              <p>{item.phone}</p>
            </div>
            <div className="col-md-12 m3">
              <Link className="aDiv">Tap to change phone number</Link>
            </div>
            <hr className="text-muted" />
            <div className="col-md-12">
              <p>@wdalm</p>
              <p className="text-muted m2">Username</p>
            </div>
            <hr className="text-muted" />
            <div className="col-md-12 mt-4">
              <h6>{item.description}</h6>
              <p className="text-muted">Bio</p>
            </div>
            <div className="col-md-12 mt-4">
              <h6>Settings</h6>
            </div>
            <div className="row mt-3">
              <div className="col-md-1">
                <i className="fa fa-bell"></i>
              </div>
              <div className="col-md-10 text-start">
                <p>Notifications and Sounds</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-1">
                <i className="fa fa-lock"></i>
              </div>
              <div className="col-md-10 text-start">
                <p>Privacy and Security</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-1">
                <i className="fa fa-database"></i>
              </div>
              <div className="col-md-10 text-start">
                <p>Data and Stronge</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-1">
                <i className="fa fa-comments-o"></i>
              </div>
              <div className="col-md-10 text-start">
                <p>Chat Settings</p>
              </div>
            </div>
            <div className="row">
              {/* <div className="col-md-1">
                <i className="fa fa-laptop"></i>
              </div> */}
              <Link
              to="/update"
              >
              <button type="button" className="btn btn-outline-warning"><i className="fa fa-pencil"></i> Edit profile</button></Link>
            </div>
          </div>
                )
              })
            ) : (
              null
            )
          }
          <Chat/>
        </div>
      </div>
    </div>
    // </div>
  );
};
export default Index;
