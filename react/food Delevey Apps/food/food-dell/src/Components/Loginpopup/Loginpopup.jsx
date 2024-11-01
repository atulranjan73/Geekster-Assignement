import React, { useState } from "react";
import "./Loginpopup.css";
import { assets } from "../../assets/assets";

const Loginpopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="Loginpopup">
      <form className="Login-pop-up-container" action="">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-input">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}
          <input type="text" placeholder="Your email" required />
          <input type="text" placeholder="Password" required />
        </div>
        <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" name="" id="" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account ? <span onClick={()=>setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already Have an account ? <span onClick={()=>setCurrState("Login")}>Login here</span>{" "}
          </p>
        )}
      </form>
    </div>
  );
};

export default Loginpopup;
