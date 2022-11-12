import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div>
    <div className="customSplash bg-light">
      <div className="bg-white loginCenter rounded-4">
        <form action="" className="customForm p-5">
          <h4 className="grape text-center mt-3 mb-4">Register</h4>
          <small>Let’s create your account!</small>
          <div className="form-group my-3">
            <label htmlFor="name" className="my-2">
              Name
            </label>
            <input
              type="text"
              className="form-control border-top-0 border-end-0 border-start-0"
              id="name"
              name="name"
              placeholder="Masukkan nama"
            />
            
          </div>
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
              // value={form.username}
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
              Register
            </button>
          </div>
          <div className="row">
            <div className="col-md-4">
              <hr />
            </div>
            <div className="col-md-4 text-center text-muted">
              Register with
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
        </form>
      </div>
    </div>
  </div>
  );
};
export default Index;
