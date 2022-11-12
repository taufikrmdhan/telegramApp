import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
    return(
        <>
        <div className="col-md-3 bg-white p-3 px-4">
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
        </>
    )
}
export default Index;