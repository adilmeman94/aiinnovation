import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Link to="/signup"> SignUp</Link>
      <Link to="/signin"> SignIn</Link>
    </div>
  );
};

export default Navigation;
