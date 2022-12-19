import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Index = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/login`, form)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token.token);
        localStorage.setItem("user", JSON.stringify(res.data.token.data));
        alert("Login Success");
        navigate("/message");
      })
      .catch((err) => {
        alert("Email or Password is wrong")
        console.log(err);
      });
  }
  return (
    <div>
      <div className="customSplash bg-light">
        <div className="bg-white loginCenter rounded-4">
          <form action="" className="customForm p-5" onSubmit={(e)=>onSubmit(e)}>
            <h4 className="grape text-center mb-4">Login</h4>
            <small>Hi, Welcome back!</small>
            <div className="form-group my-3">
              <label htmlFor="email" className="my-2">
                Email
              </label>
              <input
                type="text"
                className="form-control border-top-0 border-end-0 border-start-0"
                id="email"
                name="email"
                placeholder="Masukkan email"
                onChange={(e) => setForm({...form, email: e.target.value})}
                // value={form.email}
                // onChange={(e) => setForm({ ...form, username: e.target.value })}
              />
            </div>
            <div className="form-group my-3">
              <label htmlFor="password" className="my-2">
                Password
              </label>
              <input
                type="password"
                className="form-control border-top-0 border-end-0 border-start-0"
                id="password"
                name="password"
                placeholder="Masukkan password"
                onChange={(e) => setForm({...form, password: e.target.value})}
                // value={form.password}
                // onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>
            <div className="text-end mb-4">
              <Link className="aDiv" to="/forgot">
                Forgot Password ?
              </Link>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn btnGrape rounded-pill mb-3"
                // onClick={onSubmit}
              >
                Login
              </button>
            </div>
            <div className="row">
              <div className="col-md-4">
                <hr />
              </div>
              <div className="col-md-4 text-center text-muted">
                Login with
              </div>
              <div className="col-md-4">
                <hr />
              </div>
            </div>
            <div className="text-center">
              <Link className="btn btnGrapeOutline rounded-pill my-3" to="/register">
                <i className="fa fa-google"> Google</i>
              </Link>
            </div>
            <div className="text-center">
                <p className="text-muted ">
                  Don't have a account?{" "}
                  <Link className='aDiv'to="/register">
                    Sign Up
                  </Link>
                </p>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Index;
