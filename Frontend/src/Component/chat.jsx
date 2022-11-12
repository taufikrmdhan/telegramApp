import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

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
    <>
      <div className="col-md-9 bg-white">
        {/* <div className="col-md-12 px-4 bg-white"> */}
        <div className="d-flex flex-row align-items-center mt-3 px-3 pb-2" style={{gap:"10px"}}>
          <div>
            <img
              src={require("../assets/image/profile.png")}
              alt="profile"
              className="img-fluid rounded-4"
              width={50}
              height={50}
            />
          </div>
          <div className="flexSide">
            <div className="d-flex flex-row">
              <h6 className="flexSide">Mother</h6>
              <Link
              className="btn align-self-center"
              data-bs-toggle="collapse"
              to="#collapseExample2"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample2"
            >
              <img
                src={require("../assets/image/titik.png")}
                alt="profile"
                className="img-fluid rounded-4 align-self-center"
                width={20}
                height={20}
              />
            </Link>
            </div>
            <div className="d-flex flex-row">
              <small className="text-muted flexSide" style={{marginTop:"-15px"}}>online</small>
            </div>
            <div className="collapse position-relative" id="collapseExample2">
            <div className="bgGrapeChat rounded-5 p-3 position-absolute top-0 end-0">
              <div className="col-md-12 my-3">
                <i className="fa fa-phone text-white"> Call</i>
              </div>
              <div className="col-md-12 my-3">
                <i className="fa fa-trash text-white"> Delete chat history</i>
              </div>
              <div className="col-md-12 my-3">
                <i className="fa fa-bell text-white"> Mute notifications</i>
              </div>
              <div className="col-md-12 my-3">
                <i className="fa fa-search text-white"> Search</i>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className="col-md-12 customColChat bg-light">
          <div className="row">
            <div className="col-md-8">
              <div className="row mt-4 maxWidth">
                <div className="col-md-2 position-relative">
                  <img
                    src={require("../assets/image/profile.png")}
                    alt="profile"
                    className="img-fluid rounded-4 position-absolute end-0 translate-end customChatLeft displayHidden"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="col-md-6">
                  <p className="bgGrape text-white rounded-5 p-3">
                    Hi, son, how are you doing? Today, my father and I went to
                    buy a car, bought a cool car.
                  </p>
                </div>
                <div className="col-md-2 d-flex align-self-center grape">
                  <small>Wed, 20.32</small>
                </div>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <div className="row mt-4">
                <div className="col-md-8">
                  <p className="bg-white rounded-5 p-3">
                    Oh! Cool Send me photo
                  </p>
                </div>
                <div className="col-md-2 position-relative">
                  <img
                    src={require("../assets/image/profile1.png")}
                    alt="profile"
                    className="img-fluid rounded-4 position-absolute  translate-end customChatLeft displayHidden"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="input-group mb-3 mt-2 rounded-5 px-4">
          <input
            type="text"
            className="form-control bg-light border-0"
            placeholder="Type a message"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <Link
            className="btn btn-outline-secondary bg-light border-0"
            data-bs-toggle="collapse"
            to="#collapseExample3"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample3"
          >
            <i className="fa fa-plus grape"></i>
          </Link>
          <div className="collapse position-relative" id="collapseExample3">
            <div className="bgGrapeChat2 rounded-5 p-3 position-absolute top-0 end-0">
              <div className="col-md-12 my-3 mx-2">
                <i className="fa fa-picture-o text-white"> Image</i>
              </div>
              <div className="col-md-12 my-3 mx-2">
                <i className="fa fa-file text-white"> Documents</i>
              </div>
              <div className="col-md-12 my-3 mx-2">
                <i className="fa fa-address-book text-white"> Contacts</i>
              </div>
              <div className="col-md-12 my-3 mx-2">
                <i className="fa fa-map-marker text-white"> Location</i>
              </div>
            </div>
          </div>
          <button
            className="btn btn-outline-secondary bg-light border-0"
            type="button"
            id="button-addon2"
          >
            <i className="fa fa-smile-o grape"></i>
          </button>
          <div>
            <button
              className="btn btn-outline-secondary bg-light border-0"
              type="button"
              id="button-addon2"
              onClick={handleClick}
            >
              <i className="fa fa-upload grape"></i>
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
          <button
            className="btn btn-outline-secondary bg-light border-0"
            type="button"
            id="button-addon2"
          >
            <i className="fa fa-paper-plane grape"></i>
          </button>
        </div>
        
      </div>
    </>
  );
};
export default Index;
