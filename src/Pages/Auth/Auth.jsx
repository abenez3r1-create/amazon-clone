import React from "react";
import classes from "./signup.module.css";
import logo from "../../assets/amazon_auth.png";

function Auth() {
  return (
    <>
      <section className={classes.all__container}>
        <div className={classes.logo_image}>
          <img src={logo} alt="" />
        </div>
        <div className={classes.login}>
          <div>
            <form action="">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </form>

            <form action="">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </form>
            <button className={classes.signin_btn}>Sign-In</button>
          </div>
          <p>
            <strong>Disclaimer:</strong> By continuing, you acknowledge that
            this is a<strong>non-commercial educational clone</strong>. This is
            not the official Amazon website. Please <strong>do not</strong>
            enter real credentials, payment information, or personal data. No
            real accounts are created, and no transactions will be processed.
          </p>
          <button className={classes.create_btn}>
            Create a free business account
          </button>
        </div>
      </section>
    </>
  );
}

export default Auth;
