import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./CreateAccount.css";
import { auth } from "../../firebase.js";

function CreateAccount() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const register = (e) => {
    e.preventDefault();
    //Do some fancy firebase register
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        auth.onAuthStateChanged(function (user) {
          if (user) {
            user
              .updateProfile({
                // <-- Update Method here
                displayName: name,
              })
              .then(
                function () {
                  var displayName = user.displayName;
                  console.log("this is from create account: ", displayName);
                  history.push("/");
                },
                function (error) {
                  console.log(error);
                }
              );
          }
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Create account</h1>
        <form>
          <h5>Your name</h5>
          <input type="text" onChange={(e) => setName(e.target.value)} />
          <h5>Email</h5>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
          <h5>Password</h5>
          <input
            type="password"
            placeholder="At least 6 characters"
            onChange={(e) => setPassword(e.target.value)}
          />
          <h5>Re-enter password</h5>
          <input type="password" />

          <button
            type="submit"
            onClick={register}
            className="login__signInButton"
          >
            Create your Amazon account
          </button>
        </form>

        <p>
          By creating an account, you agree to Fake Amazon's Conditions of Use
          and Privacy Notice.
        </p>

        <div>
          Already have an account? <span> Sign-in &gt; </span>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
