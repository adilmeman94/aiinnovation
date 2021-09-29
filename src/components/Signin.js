import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userData } = props;

  const OnSignIn = (e) => {
    e.preventDefault();
    const existEmail = userData.some((el) => el.Email === email);
    const existPassword = userData.some((el) => el.password === password);
    if (existEmail && existPassword) {
      toast("User successfully login!!");
    } else {
      toast("email or password is incorrect!!");
    }
  };

  return (
    <div className="signup-div col-lg-6 col-md-6 col-sm-8 col-xs-12">
      <h3> SignIn</h3>
      <ToastContainer />
      <form
        onSubmit={(e) => {
          OnSignIn(e);
        }}
      >
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter Email"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="enter password"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignIn;
