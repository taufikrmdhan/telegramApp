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
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 bg-white p-3 px-4 displayHidden">
            <div className="row px-3 pb-5 pt-4">
              <div className="col-md-10">
                <h4 className="grape">Telegram</h4>
              </div>
              <div className="col-md-1">
                <Link
                  class="btn"
                  data-bs-toggle="collapse"
                  to="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <i className="fa fa-align-right grape"></i>
                </Link>
              </div>
              <div className="collapse" id="collapseExample">
                <div className="row bgGrape rounded-5">
                  <div className="col-md-4 fs-5 p-1 text-white text-center">
                    <i className="fa fa-users"></i>
                  </div>
                  <div className="col-md-4 fs-5 p-1 text-white text-center">
                    <i className="fa fa-lock"></i>
                  </div>
                  <div className="col-md-4 fs-5 p-1 text-white text-center">
                    <i className="fa fa-volume-up"></i>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-1">
                <i className="fa fa-align-right grape"></i>
              </div> */}
            </div>
            <div className="row mb-4">
              <div className="col-md-10">
                <div className="input-group rounded-4 bg-light">
                  <button
                    id="button-addon3"
                    type="button"
                    className="btn btn-link text-muted"
                  >
                    <i className="fa fa-search"></i>
                  </button>
                  <input
                    type="search"
                    placeholder="Type your message"
                    aria-describedby="button-addon3"
                    className="form-control bg-light border-0"
                  />
                </div>
              </div>
              <div className="col-md-1">
                <i className="fa fa-plus grape fs-3 mt-1 align-self-center"></i>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <button className="btn btnGrape rounded-5">All</button>
              </div>
              <div className="col-md-4">
                <button className="btn  rounded-5">Unread</button>
              </div>
              <div className="col-md-4">
                <button className="btn  rounded-5">Important</button>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-2 align-self-center">
                <img
                  src={require("../assets/image/profile.png")}
                  alt="profile"
                  className="img-fluid rounded"
                  width={110}
                  height={110}
                />
              </div>
              <div className="col-md-8 ml1">
                <div className="row">
                  <div className="col-md-12">
                    <h6>John Doe</h6>
                  </div>
                  <div className="col-md-12 m3">
                    <small className="grape">Lorem ipsum dolor sit amet</small>
                  </div>
                </div>
              </div>
              <div className="col-md-1">
                <div className="row">
                  <div className="col-md-12">
                    <small className="text-muted">15.20</small>
                  </div>
                  <div className="col-md-12">
                    <small className="rounded-circle bgGrape text-white px-1">
                      2
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-2 align-self-center">
                <img
                  src={require("../assets/image/profile1.png")}
                  alt="profile"
                  className="img-fluid rounded"
                  width={110}
                  height={110}
                />
              </div>
              <div className="col-md-8 ml1">
                <div className="row">
                  <div className="col-md-12">
                    <h6>Maya</h6>
                  </div>
                  <div className="col-md-12 m3">
                    <small className="text-muted">
                      Lorem ipsum dolor sit amet
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-md-1">
                <div className="row">
                  <div className="col-md-12">
                    <small className="text-muted">Yesterday</small>
                  </div>
                  <div className="col-md-12">
                    <i className="fa fa-check grape"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-2 align-self-center">
                <img
                  src={require("../assets/image/profile.png")}
                  alt="profile"
                  className="img-fluid rounded"
                  width={110}
                  height={110}
                />
              </div>
              <div className="col-md-8 ml1">
                <div className="row">
                  <div className="col-md-12">
                    <h6>Mother</h6>
                  </div>
                  <div className="col-md-12 m3">
                    <small className="text-muted">
                      Lorem ipsum dolor sit amet
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-md-1">
                <div className="row">
                  <div className="col-md-12">
                    <small className="text-muted">Yesterday</small>
                  </div>
                  <div className="col-md-12">
                    <i className="fa fa-check"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 bg-white displayHidden">
            {/* <div className="col-md-12 px-4 bg-white"> */}
            <div className="row bg-white px-5 pt-3">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-2">
                    <img
                      src={require("../assets/image/profile.png")}
                      alt="profile"
                      className="img-fluid rounded-4"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="col-md-10 ml1">
                    <div className="row">
                      <div className="col-md-12">
                        <h6>Mother</h6>
                      </div>
                      <div className="col-md-12 m3">
                        <p className="grape">Online</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-end pt-2">
                <Link
                  className="btn"
                  data-bs-toggle="collapse"
                  to="#collapseExample2"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample2"
                >
                  <img
                    src={require("../assets/image/titik.png")}
                    alt="profile"
                    className="img-fluid rounded-4"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
              <div className="collapse position-relative" id="collapseExample2">
                <div className="bgGrapeChat rounded-5 p-3 position-absolute top-0 end-0">
                  <div className="col-md-12 my-3">
                    <i className="fa fa-phone text-white"> Call</i>
                  </div>
                  <div className="col-md-12 my-3">
                    <i className="fa fa-trash text-white">
                      {" "}
                      Delete chat history
                    </i>
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
            <div className="col-md-12 customColChat bg-light">
              <div className="row">
                <div className="col-md-8">
                  <div className="row mt-4">
                    <div className="col-md-2 position-relative">
                      <img
                        src={require("../assets/image/profile.png")}
                        alt="profile"
                        className="img-fluid rounded-4 position-absolute end-0 translate-end customChatLeft"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="col-md-6">
                      <p className="bgGrape text-white rounded-5 p-3">
                        Hi, son, how are you doing? Today, my father and I went
                        to buy a car, bought a cool car.
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
                        className="img-fluid rounded-4 position-absolute  translate-end customChatLeft"
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
                src={require("../assets/image/profile.png")}
                alt="profile"
                className="img-fluid rounded-4"
                width={65}
                height={65}
              />
            </div>
            <div className="d-flex flex-row align-items-center">
              <div className="">
                <h5 className="">Mother</h5>
                <p className="text-muted">Online</p>
              </div>
              <div className="flexSide text-end">
                <i className="fa fa-align-justify grape"></i>
              </div>
            </div>
            <div className="col-md-12 mt-4">
              <h6>Phone Number</h6>
            </div>
            <div className="col-md-12 mt-1">
              <p>+375(29)9638433</p>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-4">
                <Link
                  className="btn rounded-5"
                  data-bs-toggle="collapse"
                  to="#location"
                  role="button"
                  aria-expanded="false"
                  aria-controls="location"
                >
                  Location
                </Link>
              </div>
              <div className="col-md-4">
                <Link
                  className="btn btnGrape rounded-5"
                  data-bs-toggle="collapse"
                  to="#image"
                  role="button"
                  aria-expanded="false"
                  aria-controls="image"
                >
                  Image
                </Link>
              </div>
              <div className="col-md-4">
                <Link
                  className="btn rounded-5"
                  data-bs-toggle="collapse"
                  to="#document"
                  role="button"
                  aria-expanded="false"
                  aria-controls="document"
                >
                  Document
                </Link>
              </div>
              <div className="collapse mt-2" id="location">
                <p>This is location</p>
              </div>
              <div className="collapse mt-2" id="image">
                <div className="d-flex flex-row">
                    <div className="col-md-4 mx-2">
                        <img
                            src={require("../assets/image/profile1.png")}
                            alt="profile"
                            className="img-fluid rounded-4"
                            width={70}
                            height={70}
                        />

                    </div>
                    <div className="col-md-4 mx-2">
                        <img
                            src={require("../assets/image/profile1.png")}
                            alt="profile"
                            className="img-fluid rounded-4"
                            width={70}
                            height={70}
                        />
                        
                    </div>
                    <div className="col-md-4 mx-2">
                        <img
                            src={require("../assets/image/profile1.png")}
                            alt="profile"
                            className="img-fluid rounded-4"
                            width={70}
                            height={70}
                        />
                        
                    </div>
                </div>
              </div>
              <div className="collapse mt-2" id="document">
                <p>This is document</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;
