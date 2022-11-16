import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import axios from "axios";
import io from "socket.io-client";

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

  const [socketio, setSocketIo] = useState(null);
  const [listChat, setListChat] = useState([]);

  useEffect(() => {
    const socket = io(`http://localhost:3003`);
    socket.on("send-message-response", (response) => {
      const receiver = JSON.parse(localStorage.getItem("receiver"));

      if (
        receiver.username === response[0].sender ||
        receiver.username === response[0].receiver
      ) {
        setListChat(response);
        console.log(response);
      }
    });
    setSocketIo(socket);
  }, []);

  const [message, setMessage] = useState();

  const onSubmitMessage = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    const receiver = JSON.parse(localStorage.getItem("receiver"));

    const payload = {
      sender: user.username,
      receiver: receiver.username,
      message,
    };

    setListChat([...listChat, payload]);
    const data = {
      sender: user.id_user,
      receiver: activeReceiver.id_user,
      message,
    };
    socketio.emit("send-message", data);
    setMessage("");
  };

  const [listuser, setListUser] = useState([]);
  const [login, setLogin] = useState({});
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setLogin(user);
    axios
      .get("http://localhost:3003/user/list")
      .then((res) => {
        setListUser(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [activeReceiver, setActiveReceiver] = useState({});
  const selectReceiver = (item) => {
    setListChat([]);
    setActiveReceiver(item);

    localStorage.setItem("receiver", JSON.stringify(item));
    socketio.emit("join-room", login);
    const data = {
      sender: login.id_user,
      receiver: item.id_user,
    };

    socketio.emit("chat-history", data);
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 bg-white p-3 px-4">
            <div className="row pb-5 pt-4">
              <div className="col-md-12 d-flex flex-row align-items-center">
                <div className="btn px-0 flexSide text-start position-relative">
                  <h4 className="grape">Telegram</h4>
                  <div
                    className="collapse customCollapsePlus"
                    id="collapseExample"
                  >
                    <div className="d-flex flex-row align-items-center bgGrape rounded-5 w-75">
                      <div className="flexSide fs-5 p-1 text-white text-center">
                        <i className="fa fa-users"></i>
                      </div>
                      <div className="flexSide fs-5 p-1 text-white text-center">
                        <i className="fa fa-lock"></i>
                      </div>
                      <div className="flexSide fs-5 p-1 text-white text-center">
                        <i className="fa fa-volume-up"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  className="btn px-0 text-end"
                  data-bs-toggle="collapse"
                  to="#setting"
                  role="button"
                  aria-expanded="false"
                  aria-controls="setting"
                >
                  <i className="fa fa-align-right grape"></i>
                </Link>
              </div>
              <div className="collapse position-relative" id="setting">
                <div className="bgGrapeSetting rounded-5 p-3 position-absolute top-0 end-0">
                  <div className="col-md-12 my-3">
                    <i className="fa fa-cog text-white"> Setting</i>
                  </div>
                  <div className="col-md-12 my-3">
                    <i className="fa fa-user text-white"> Contacts</i>
                  </div>
                  <div className="col-md-12 my-3">
                    <i className="fa fa-phone text-white"> Calls</i>
                  </div>
                  <div className="col-md-12 my-3">
                    <i className="fa fa-save text-white"> Save message</i>
                  </div>
                  <div className="col-md-12 my-3">
                    <i className="fa fa-user-plus text-white">
                      {" "}
                      Invite friends
                    </i>
                  </div>
                  <div className="col-md-12 my-3">
                    <i className="fa fa-question-circle text-white">
                      {" "}
                      Telegram FAQ
                    </i>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div
                className="col-md-12 d-flex flex-row align-items-center"
                style={{ gap: "10px" }}
              >
                <div className="flexSide input-group rounded-4 bg-light">
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
                <Link
                  data-bs-toggle="collapse"
                  to="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <i className="fa fa-plus grape fs-3 mt-1 align-self-center"></i>
                </Link>
              </div>
            </div>
            <div
              className="d-flex flex-row align-items-center"
              style={{ gap: "10px" }}
            >
              <div className="flexSide text-center">
                <button className="btn btnGrape rounded-5">All</button>
              </div>
              <div className="flexSide text-center">
                <button className="btn rounded-5">Unread</button>
              </div>
              <div className="flexSide text-center">
                <button className="btn rounded-5">Important</button>
              </div>
            </div>
            {listuser.map((item, index) =>
              item.id_user !== login.id_user ? (
                <React.Fragment key={item.id_user}>
                  <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={0}
                    className="swiperChat"
                  >
                    <SwiperSlide>
                      <div
                        className="d-flex flex-row align-items-center mt-3"
                        style={{ gap: "10px" }}
                      >
                        <div className="">
                          <img
                            // src={require("../assets/image/profile.png")}
                            src={`${process.env.REACT_APP_BACKEND_URL}/${item.image}`}
                            alt="profile"
                            className="img-fluid rounded custImgChat"
                            width={55}
                            height={55}
                          />
                        </div>
                        <div className="flexSide">
                          <div className="d-flex flex-row">
                            <h6
                              className="flexSide"
                              onClick={() => selectReceiver(item)}
                            >
                              {item.username}
                            </h6>
                            <small className="text-muted">15.30</small>
                          </div>
                          <div className="d-flex flex-row">
                            <small className="text-muted flexSide">
                              hello, how are you?
                            </small>
                            {item.number ? (
                              <small className="rounded-circle bgGrape text-white px-2">
                                {item.number}
                              </small>
                            ) : (
                              <i className="fa fa-check"></i>
                            )}
                            {/* <i className="fa fa-check"></i> */}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="m-3">
                      <div
                        className="d-flex flex-row align-items-center bgGrape"
                        style={{ width: "100%", height: "100%" }}
                      >
                        <div className="flexSide fs-5 p-1 text-white text-center">
                          <i className="fa fa-save"></i>
                        </div>
                        <div className="flexSide fs-5 p-1 text-white text-center">
                          <i className="fa fa-check"></i>
                        </div>
                        <div className="flexSide fs-5 p-1 text-white text-center">
                          <i className="fa fa-trash"></i>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </React.Fragment>
              ) : null
            )}
          </div>
          <div className="col-md-9 bg-white">
            {/* <div className="col-md-12 px-4 bg-white"> */}
            <div
              className="d-flex flex-row align-items-center mt-3 px-3 pb-2"
              style={{ gap: "10px" }}
            >
              <div>
                <Link to="/profile">
                  <img
                    // src={require("../assets/image/profile.png")}
                    
                      src={`${process.env.REACT_APP_BACKEND_URL}/${activeReceiver.image}`}
                    
                    alt="profile"
                    className="img-fluid rounded-4"
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
              <div className="flexSide">
                <div className="d-flex flex-row">
                  <h6 className="flexSide">{
                    activeReceiver.username ? activeReceiver.username : "No user"
                  }</h6>
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
                  <small
                    className="text-muted flexSide"
                    style={{ marginTop: "-15px" }}
                  >
                    {activeReceiver.username ? (
                      <small>online</small>
                    ) : (
                      <small>offline</small>
                    )}
                  </small>
                </div>
                <div
                  className="collapse position-relative"
                  id="collapseExample2"
                >
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
                      <i className="fa fa-bell text-white">
                        {" "}
                        Mute notifications
                      </i>
                    </div>
                    <div className="col-md-12 my-3">
                      <i className="fa fa-search text-white"> Search</i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-12 customColChat bg-light"
              style={{ overflow: "scroll" }}
            >
              {listChat.map((item, index) => (
                <div key={index}>
                  {/* {console.log(item)} */}
                  {item.sender == login.username ? (
                    <div className="row">
                      <div className="col-md-8">
                        <div className="row mt-4 maxWidth">
                          <div className="col-md-2 position-relative">
                            <img
                              // src={require("../assets/image/profile.png")}
                              src={
                                listuser.find(
                                  (user) => user.username == item.sender
                                ).image
                                  ? `${process.env.REACT_APP_BACKEND_URL}/${listuser.find(
                                      (user) => user.username == item.sender
                                    ).image}`
                                  : require("../assets/image/profile.png")
                              }
                              alt="profile"
                              className="img-fluid rounded-4 position-absolute end-0 translate-end customChatLeft displayHidden"
                              width={50}
                              height={50}
                            />
                          </div>
                          <div className="col-md-6">
                            <p className="bgGrape text-white rounded-5 p-3">
                              {/* Hi, son, how are you doing? Today, my father and I
                                  went to buy a car, bought a cool car.
                                   */}
                              {item.message}
                            </p>
                          </div>
                          <div className="col-md-2 d-flex align-self-center grape">
                            <small>
                              {String(item.create_at).slice(11, 16)}
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4"></div>
                    </div>
                  ) : (
                    <div className="row">
                      <div className="col-md-6"></div>
                      <div className="col-md-6">
                        <div className="row mt-4">
                          <div className="col-md-8">
                            <p className="bg-white rounded-5 p-3">
                              {item.message}
                            </p>
                          </div>
                          <div className="col-md-2 d-flex align-self-center grape">
                            <small>
                              {String(item.create_at).slice(11, 16)}
                            </small>
                          </div>
                          <div className="col-md-2 position-relative">
                            <img
                              // src={require("../assets/image/profile1.png")}
                              src={`${process.env.REACT_APP_BACKEND_URL}/${activeReceiver.image}`}
                              alt="profile"
                              className="img-fluid rounded-4 position-absolute  translate-end customChatLeft displayHidden"
                              width={50}
                              height={50}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="input-group mb-3 mt-2 rounded-5 px-4">
              <form onSubmit={onSubmitMessage} style={{ width: "85%" }}>
                <input
                  onChange={(e) => setMessage(e.target.value)}
                  type="text"
                  className="form-control bg-light border-0"
                  placeholder="Type a message"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
              </form>
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
        </div>
      </div>
    </div>
  );
};
export default Index;
