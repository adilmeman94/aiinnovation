import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [moNumber, setMoNumber] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [fValid, setFValid] = useState(false);
  const { setUserData, userData } = props;

  const OnSignUp = (e) => {
    e.preventDefault();
    if (password === confirmpassword) {
      setUserData(...userData, [
        {
          firstName: firstName,
          lastName: lastName,
          Email: email,
          Monumber: moNumber,
          Gender: gender,
          password: password,
        },
      ]);
      toast("User successfully created!!");
    } else {
      setFValid(true);
      toast("password is mismatched");
    }
  };

  const selectGender = (e) => {
    e.preventDefault();
    setGender(e.target.value);
  };

  return (
    <div className="signup-div col-lg-6 col-md-6 col-sm-8 col-xs-12">
      <h3> SignUp</h3>
      <ToastContainer />
      <form
        onSubmit={(e) => {
          OnSignUp(e);
        }}
      >
        <div className="mb-3">
          <label className="form-label">firstName</label>
          <input
            type="text"
            className="form-control"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder="firstName"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">lastName</label>
          <input
            type="text"
            className="form-control"
            value={lastName}
            onChange={(e) => {
              setlastName(e.target.value);
            }}
            placeholder="lastName"
            required
          />
        </div>
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
          <label className="form-label">Phone Number</label>
          <input
            type="number"
            className="form-control"
            value={moNumber}
            onChange={(e) => {
              setMoNumber(e.target.value);
            }}
            placeholder="Enter Mo number"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select
            className="form-select"
            aria-label="Default select example"
            value={gender}
            onChange={(e) => {
              selectGender(e);
            }}
          >
            <option defaultValue>Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Transgender">Transgender</option>
          </select>
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
        <div className="mb-3">
          <label className="form-label"> Confirm Password</label>
          <input
            type="password"
            className="form-control"
            value={confirmpassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            placeholder="confirmpassword"
            required
          />
        </div>

        <button className="btn btn-primary" disabled={fValid}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
