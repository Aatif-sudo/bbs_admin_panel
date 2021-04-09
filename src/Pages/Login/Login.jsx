import React, { useEffect, useRef } from "react";
import "./Login.scss";
// import { IconName } from "react-icons/fa";

function Login() {
  // const containerRef = useRef();
  // const signUpButton = document.getElementById("signUp");
  // const signInButton = document.getElementById("signIn");
  // const container = document.getElementById("container");

  // signUpButton?.addEventListener("click", () => {
  //   container.classList.add("right-panel-active");
  // });

  // signInButton?.addEventListener("click", () => {
  //   container.classList.remove("right-panel-active");
  // });
  useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
  }, []);

  return (
    <div>
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Forgot Password</h1>
            <span>Enter your email to reset Password</span>
            <input type="email" placeholder="Email" />
            <button>Get OTP</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Log in</h1>

            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Login Instead!</h1>
              <p>To keep connected with us Try loging in</p>
              <button className="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Forgot Your Password</h1>
              <p>Enter your email address to</p>
              <button className="ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
