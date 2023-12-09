import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, useEmail] = useState("");
  const [pass, usePass] = useState("");

  const valid = (data) => {
    // Object.keys(data).length => which give array of keys, with that we can find length of the obj.
    if (data == 0) {
      document.getElementById("warning_op").innerText =
        "There's no such Email.";
    } else if (data == 1) {
      document.getElementById("warning_op").innerText = "Wrong password bro!";
    } else {
      // setTimeout(() => {
      //   navigate("/home");
      // }, 2000);
      navigate("/home");
    }
  };
  const form_sub = (e) => {
    e.preventDefault();

    if (email != "" && pass != "") {
      const data = { email, pass };
      fetch("http://localhost:3000/check", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => valid(data))
        .catch((err) => alert(err));
    } else alert("Enter valid email-id and password");
  };
  return (
    <>
      <div className="login_home">
        <div className="login_signup">
          <div id="login_sign">
            <h1>Welcome!</h1>
            <div
              style={{
                display: "block",
              }}
            >
              <p>....</p>
              <p>New? Sign-up here</p>
            </div>
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "white" }}
            >
              <button className="login_signup_but">Sign Up</button>
            </Link>
          </div>
        </div>
        <div className="login_form">
          <div className="login_form_inside">
            <p>Login</p>
            <form
              onSubmit={(e) => {
                form_sub(e);
              }}
              className="form_login"
            >
              <div className="form_inp">
                <div className="form_div1">
                  <label htmlFor="email">Email address</label>
                  <br />
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      useEmail(e.target.value);
                    }}
                    placeholder="Email"
                  />
                </div>
                <div className="form_div2">
                  <label htmlFor="pass">Password</label>
                  <br />
                  <input
                    type="text"
                    id="pass"
                    name="pass"
                    value={pass}
                    onChange={(e) => {
                      usePass(e.target.value);
                    }}
                    placeholder="Password"
                    required
                  />
                </div>
                <p id="warning_op"></p>
              </div>
              <div className="check_div">
                <p>Hide Password</p>
                <input
                  className="check_box"
                  type="checkbox"
                  id="hide"
                  onClick={(e) => {
                    if (e.target.checked === true)
                      document.getElementById("pass").type = "password";
                    else document.getElementById("pass").type = "text";
                  }}
                  // checked
                />
              </div>
              <button className="submit_but">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
