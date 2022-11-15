import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [image, setImage] = useState("");

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

  const handleUpdate = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    if(image !== ""){
      formData.append("image", image);
    }
    formData.append("id_user", id_user);
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/user/update/${id_user}`, formData)
      .then((res) => {
        // console.log(res);
        alert("Update Success");
        // navigate("/profile");
      })
      .catch((err) => {
        alert("Update Failed");
        // console.log(err);
      })
  };

  const deleteUser = (e) => {
    e.preventDefault();
    axios
    .delete(`${process.env.REACT_APP_BACKEND_URL}/user/delete/${id_user}`)
    .then((res) => {
      // console.log(res);
      alert("Delete Success");
      localStorage.clear();
      navigate("/");
    })
    .catch((err) => {
      alert("Delete Failed");
      // console.log(err);
    })
  }

  const hiddenFileInput = useRef(null);
  const handleClick = (event) => {
    // console.log(event);
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    // console.log(fileUploaded);
    setImage(fileUploaded);
  };
  return (
    <div>
      <div className="containerProfile">
        <div className="row">
          {
            user.length > 0 ? (
              user.map((item, index) => {
                return (
                  <div key={item.id_user} className="col-md-3 bg-white py-4 px-5">
                    <div className="row mt-2">
                      <div className="col-md-1 text-start ml1">
                        <i className="fa fa-angle-left grape"></i>
                      </div>
                      <div className="col-md-11 text-center grape">
                        <h5>@username</h5>
                      </div>
                    </div>
                    <div className="col-md-12 text-center mt-4 mb-3">
                      <img
                        // src={require("../assets/image/profile1.png")}
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
                      <p>{item.phone}</p>
                    </div>
                    <div className="col-md-12 m3">
                      <Link className="aDiv">Tap to change phone number</Link>
                    </div>
                    <hr className="text-muted" />
                    <div className="col-md-12">
                      <p>{item.username}</p>
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
                  </div>
                );
              })
            ) : (
              null
            )
          }
          <div className="col-md-9 bg-white py-4 px-5">
            {/* edit profile username, email, description, image, phone*/}
            <form onSubmit={(e) => handleUpdate(e)}>
              {
                user.length > 0 ? (
                  user.map((item, index) => {
                    return(
                      <div key={item.id_user} className="col-md-12 mt-4 bg-white">
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
                          defaultValue={item.username}
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
                          defaultValue={item.email}
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
                          defaultValue={item.description}
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
                          defaultValue={item.phone}
                          // onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                      <div className="col-md-12 mt-4">
                        <button
                          type="submit"
                          className="btn btn-warning"
                          style={{ width: "100%" }}
                        >
                          Update profile
                        </button>
                      </div>
                      <div className="col-md-12 mt-2">
                        <button
                          type="button"
                          className="btn btn-danger"
                          style={{ width: "100%" }}
                          onClick={(e)=> deleteUser(e)}
                        >
                          Delete Profile
                        </button>
                      </div>
                    </div>
                    )
                  })
                ) : (
                  null
                )
              }
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
