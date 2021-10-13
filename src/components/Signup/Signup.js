import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signInWithGoogle, signInWithGithub, signInWithFacebook, createAccountWithEmailandPassword, error } =
    useAuth();

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    createAccountWithEmailandPassword(email, password);
  };

  return (
    <div className="w-25 mx-auto text-start">
      <h1 className="text-center">Sign Up</h1>
      <form onSubmit={handleSignUpSubmit} className="mx-auto text-start">
        {/* <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input type="text" className="form-control" id="name" />
        </div> */}

        <div className="mb-3">
          <label htmlFor="InputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            id="InputEmail1"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="InputPassword1" className="form-label">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            id="InputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>

        <div className="text-center text-muted">
          <span>------or------</span>
          <p>Sign Up With</p>
        </div>
      </form>
      <div className="d-flex justify-content-around my-3">
        <button onClick={signInWithGoogle} className="btn btn-danger">
          Google
        </button>
        <button onClick={signInWithGithub} className="btn btn-success">
          Github
        </button>
        <button onClick={signInWithFacebook} className="btn btn-primary">
          FaceBook
        </button>
      </div>
      <Link to="/login">Already have a account? Login.</Link>

      {error && <div className="alert alert-danger my-3">{error}</div>}
    </div>
  );
};

export default Signup;
