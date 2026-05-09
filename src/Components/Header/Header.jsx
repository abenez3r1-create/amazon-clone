import React, { useContext, useReducer } from "react";
import classes from "./header.module.css";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { BiCart, BiFlag } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import logo from "../../assets/logo.png";
import LowerHeader from "../LowerHeader/LowerHeader";
import { initialState, reducer } from "../../Utility/reducer";
import { DataContext } from "../DataProvider/DataProvider";
import flag from "../../assets/usflag.png";
// import { useStateValue } from "../DataProvider/DataProvider";

function Header() {
  const [{ basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((quantity, item) => {
    return item.quantity + quantity;
  }, 0);
  return (
    <section className={classes.all__father}>
      <section className={classes.header__container}>
        <section className={classes.all__container}>
          <div className={classes.logo_Container}>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          <div className={classes.searchBar}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="Search Product" />
            <span className={classes.searchIcon}>
              <BsSearch size={22} />
            </span>
          </div>
          <div className={classes.order_container}>
            <Link to="#" className={classes.language}>
              <span>
                {" "}
                <img className={classes.flag_image} src={flag} alt="flag" />
              </span>
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>

            <div>
              <Link to="/auth">
                <p>sign in</p>
                <span>Account & Lists</span>
              </Link>
            </div>
            <div>
              <Link to="/order">
                <p>returns</p>
                <span>& Orders</span>
              </Link>
            </div>
            <div className={classes.cart}>
              <Link to="/cart">
                <BiCart size={35} />
                <span>{totalItem}</span>
                {/* <span>0</span> */}
              </Link>
            </div>
          </div>
        </section>
      </section>
      <LowerHeader />
    </section>
  );
}
export default Header;
