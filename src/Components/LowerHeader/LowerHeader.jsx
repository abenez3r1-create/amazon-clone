import React from "react";
import classes from "../Header/header.module.css";
import { BiMenu } from "react-icons/bi";
function LowerHeader() {
  return (
    <>
      <div className={classes.lower_header}>
        <ul>
          <li>
            <BiMenu />
            <p>All</p>
          </li>
          <li>Today's deals</li>
          <li>Costumer Service</li>
          <li>Registry</li>
          <li>Gift Cards</li>
          <li>Sell</li>
        </ul>
      </div>
    </>
  );
}

export default LowerHeader;
