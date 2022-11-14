import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Index = () => {
  const hiddenFileInput = useRef(null);
  const handleClick = (event) => {
    console.log(event);
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    console.log(fileUploaded);
    // setImage(fileUploaded);
  };
  return (
    <div>
      <div className="containerProfile">
        <div className="row">
          <div className="col-md-3 bg-white py-4 px-5">
            <div className="row mt-2">
              <div className="col-md-1 text-start ml1">
                <i className="fa fa-angle-left grape"></i>
              </div>
              <div className="col-md-11 text-center grape">
                <h5>@wdalm</h5>
              </div>
            </div>
            <div className="col-md-12 text-center mt-4 mb-3">
              <img
                src={require("../assets/image/profile1.png")}
                alt="profile"
                className="img-fluid rounded-4"
                width={65}
                height={65}
              />
            </div>
            <div className="col-md-12 text-center">
              <h5 className="">Wahyu Dalmia</h5>
            </div>
            <div className="col-md-12 text-center m1">
              <button className="btn text-muted" onClick={handleClick}>
                &#9998; Edit
              </button>
              <input
                type="file"
                ref={hiddenFileInput}
                id="formFile"
                name="image"
                onChange={(e) => handleChange(e)}
                style={{ display: "none" }}
              />
            </div>
            <div className="col-md-12 mt-4">
              <h6>Account</h6>
            </div>
            <div className="col-md-12 mt-1">
              <p>+375(29)9638433</p>
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
              <h6>I’m Senior Frontend Developer from Microsoft</h6>
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
          </div>
          <div className="col-md-9 bg-white py-4 px-5">
            {/* edit profile username, email, description, image, phone*/}
            <form onSubmit="">
              <div className="col-md-12 mt-4 bg-white">
                <h4 className="grape">Data Profile</h4>
                <hr />
                <div className="col-md-12 mt-4">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Username"
                    name="username"
                    // value={username}
                    // onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="col-md-12 mt-4">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    name="email"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-md-12 mt-4">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    placeholder="Description"
                    name="description"
                    // value={description}
                    // onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="col-md-12 mt-4">
                  <label htmlFor="phone">No Handphone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="No Handphone"
                    name="phone"
                    // value={phone}
                    // onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="col-md-12 mt-4">
                  <button
                    type="button"
                    className="btn btn-warning"
                    style={{ width: "100%" }}
                  >
                    Update profile
                  </button>
                </div>
                <div className="col-md-12 mt-4">
                  <button
                    type="button"
                    className="btn btn-danger"
                    style={{ width: "100%" }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
