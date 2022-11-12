import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Index = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      message: "lorem ipsum doleum",
      time: "10:00 AM",
      number: 1,
    },
    {
      id: 2,
      name: "Mother",
      message: "Hello World",
      time: "10:00 AM",
      number: null,
    },
    {
      id: 3,
      name: "Olga",
      message: "Ping",
      time: "10:00 AM",
      number: null,
    },
  ];
  return (
    <>
      <div className="col-md-3 bg-white p-3 px-4">
        <div className="row pb-5 pt-4">
          <div className="col-md-12 d-flex flex-row align-items-center">
            <div className="btn px-0 flexSide text-start position-relative">
              <h4 className="grape">Telegram</h4>
              <div className="collapse customCollapsePlus" id="collapseExample">
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
              class="btn px-0 text-end"
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
                <i className="fa fa-user-plus text-white"> Invite friends</i>
              </div>
              <div className="col-md-12 my-3">
                <i className="fa fa-question-circle text-white">
                  {" "}
                  Telegram FAQ
                </i>
              </div>
            </div>
          </div>
          {/* <div className="col-md-1">
                <i className="fa fa-align-right grape"></i>
              </div> */}
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
        {data.map((item) => {
          return (
            <React.Fragment key={item.id}>
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
                        src={require("../assets/image/profile.png")}
                        alt="profile"
                        className="img-fluid rounded custImgChat"
                        width={55}
                        height={55}
                      />
                    </div>
                    <div className="flexSide">
                      <div className="d-flex flex-row">
                        <h6 className="flexSide">{item.name}</h6>
                        <small className="text-muted">{item.time}</small>
                      </div>
                      <div className="d-flex flex-row">
                        <small className="text-muted flexSide">
                          {item.message}
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
                <div className="d-flex flex-row align-items-center bgGrape" style={{width:"100%", height:"100%"}}>
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
          );
        })}
        {/* <div className="row mt-4">
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
                <small className="text-muted">Lorem ipsum dolor sit amet</small>
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
        </div> */}
      </div>
    </>
  );
};
export default Index;
