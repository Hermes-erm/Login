import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

function signup() {
  const [name, useName] = useState("");
  const [email, useEmail] = useState("");
  const [c_pass, useC_pass] = useState("");
  const [pass, usePass] = useState("");
  const navigate = useNavigate("");

  const log = (e) => {
    e.preventDefault();
    const data = {
      uname: "",
      email: "",
      pass: "",
    };
    if (c_pass != pass || name == "") {
      document.getElementById("warning_sign").innerText =
        "Check all the entered details.";
    } else {
      data.email = email;
      data.uname = name;
      data.pass = pass;
      fetch("http://localhost:3000/log", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data === 1) {
            document.getElementById("warning_sign").innerText =
              "Mail Id already exits, Try another.";
          } else {
            document.getElementById("toast_head").style.display = "block";
            setTimeout((e) => {
              navigate("/");
            }, 3000);
          }
        })
        .catch((err) => alert(err));
    }
  };

  return (
    <>
      <div id="signup_root">
        <div id="toast_head">
          <div className="toast">
            <p>
              Signed up! It'll redirect
              <br />
              <br />
              to login page!
            </p>
          </div>
        </div>
        <div className="signup_home">
          <p>Create your new account.</p>
          <form id="sign_form" onSubmit={(e) => log(e)}>
            <div className="sign_inp">
              <div className="sign_uname">
                <input
                  type="text"
                  id="sign_uname"
                  value={name}
                  placeholder="user name"
                  onChange={(e) => useName(e.target.value)}
                />
              </div>
              <div className="sign_email">
                <input
                  type="email"
                  id="sign_email"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => {
                    useEmail(e.target.value);
                  }}
                />
              </div>
              <div className="create_pass">
                <input
                  type="text"
                  id="create_pass"
                  value={c_pass}
                  placeholder="Create password"
                  onChange={(e) => {
                    useC_pass(e.target.value);
                  }}
                />
              </div>
              <div className="sign_pass">
                <input
                  type="text"
                  id="sign_pass"
                  value={pass}
                  placeholder="Confirm password"
                  onChange={(e) => {
                    usePass(e.target.value);
                  }}
                />
              </div>
            </div>
            <p id="warning_sign"></p>
            <br />
            <input type="submit" value={"SIGN UP"} id="signup_but" />
          </form>
        </div>
        <div className="signup_right">
          <div>
            <p>Already have an account?</p>
            <br></br>
            <button>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Login here
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default signup;
