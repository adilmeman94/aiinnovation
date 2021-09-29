import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./components/navigation";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

// Create from with following details -> Sign Up
// First Name
// Last Name
// Email
// Phone Number
// Gender -> Optional
// Password
// Confirm Password
// Register Button
// Create Login Page -> Sign In
// Username
// Password
// Login Button
// Once Customer is Signed up by clicking on register button and form valid -> Show success message toast on top, if form is in valid then disable the submit button
// Store customer email and password on UI
// When customer login with register email and password
// if both right then show success toast
// If any wrong then show error toast

function App() {
  const [userData, setUserData] = useState([]);
  console.log(userData, "data");
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <h3> A I Innovation interview </h3>
        <Switch>
          <Route
            exact
            path="/signup"
            render={(props) => (
              <SignUp
                {...props}
                setUserData={setUserData}
                userData={userData}
              />
            )}
          />
          <Route
            exact
            path="/signin"
            render={(props) => <SignIn {...props} userData={userData} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
