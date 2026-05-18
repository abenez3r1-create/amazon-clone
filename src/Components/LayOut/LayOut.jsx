import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import classes from "./layout.module.css";
function LayOut({ children }) {
  return (
    <div>
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </div>
  );
}

export default LayOut;
