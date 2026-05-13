import React, { useState, useContext } from "react";
import classes from "./signup.module.css";
import logo from "../../assets/amazon_auth.png";
import { auth } from "../../Utility/firebase";
import { ClipLoader, PulseLoader } from "react-spinners";
import { Link, useNavigate } from "react-router-dom";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
function Auth() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const [{ user }, dispatch] = useContext(DataContext);
  const [loading, setloading] = useState(false);
  const [createloading, setcreateloading] = useState(false);
  const navigate = useNavigate();
  async function authHandler(e) {
    e.preventDefault();
    if (e.currentTarget.name == "signIn") {
      setloading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          setloading(false);
          navigate("/");
          // console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
        })
        .catch((err) => {
          setloading(false);
          seterror(err.message);
        });
    } else {
      setcreateloading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          setcreateloading(false);
          // console.log(userInfo);
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          navigate("/");
        })
        .catch((err) => {
          setcreateloading(false);
          seterror(err.message);
        });
    }
  }
  return (
    <>
      <section className={classes.all__container}>
        <div className={classes.logo_image}>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className={classes.login}>
          <form action="">
            <div>
              {/* Email form */}
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                type="email"
                id="email"
              />
              {/* Password form */}
              <label htmlFor="password">Password</label>
              <input
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                type="password"
                id="password"
              />
              {/* signIn */}
              <button
                name="signIn"
                type="submit"
                onClick={authHandler}
                className={classes.signin_btn}
              >
                {loading ? <ClipLoader size={21} color="#3C3C3C" /> : "Sign-In"}
              </button>
            </div>
            <p>
              <strong>Disclaimer:</strong> By continuing, you acknowledge that
              this is a <strong>non-commercial educational clone</strong>. This
              is not the official Amazon website. Please
              <strong>do not </strong>
              enter real credentials, payment information, or personal data. No
              real accounts are created, and no transactions will be processed.
            </p>
            {/* signUp */}
            <button
              name="signUp"
              type="submit"
              onClick={authHandler}
              className={classes.create_btn}
            >
              {createloading ? (
                <PulseLoader size={5} color="#3C3C3C" />
              ) : (
                "Create a free business account"
              )}
            </button>
            {error && (
              <small
                style={{ color: "red", textAlign: "center", marginTop: "15px" }}
              >
                {error}
              </small>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

export default Auth;
