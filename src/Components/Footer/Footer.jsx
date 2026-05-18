import React from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      {/* BACK TO TOP */}
      <div
        className={classes.backToTop}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <p>Back to top</p>
      </div>

      {/* MAIN FOOTER LINKS */}
      <div className={classes.main}>
        <div className={classes.column}>
          <h3>Get to Know Us</h3>
          <Link to="#">Careers</Link>
          <Link to="#">Blog</Link>
          <Link to="#">About Us</Link>
          <Link to="#">Investor Relations</Link>
        </div>

        <div className={classes.column}>
          <h3>Make Money with Us</h3>
          <Link to="#">Sell Products</Link>
          <Link to="#">Affiliate Program</Link>
          <Link to="#">Advertise</Link>
          <Link to="#">Become a Seller</Link>
        </div>

        <div className={classes.column}>
          <h3>Payment Products</h3>
          <Link to="#">Business Card</Link>
          <Link to="#">Shop with Points</Link>
          <Link to="#">Reload Balance</Link>
          <Link to="#">Currency Converter</Link>
        </div>

        <div className={classes.column}>
          <h3>Let Us Help You</h3>
          <Link to="#">Your Account</Link>
          <Link to="#">Returns Centre</Link>
          <Link to="#">Shipping Info</Link>
          <Link to="#">Help</Link>
        </div>
      </div>

      {/* LANGUAGE / REGION */}
      <div className={classes.languageBar}>
        <div className={classes.logo}>YourStore</div>

        <div className={classes.selectBox}>
          <select>
            <option>English</option>
            <option>Amharic</option>
          </select>

          <select>
            <option>USD - US Dollar</option>
            <option>ETB - Birr</option>
          </select>
        </div>
      </div>

      {/* BOTTOM LEGAL */}
      <div className={classes.bottom}>
        <div className={classes.links}>
          <Link to="#">Conditions of Use</Link>
          <Link to="#">Privacy Notice</Link>
          <Link to="#">Cookies</Link>
        </div>

        <p>© 2026 YourStore Clone</p>
      </div>
    </footer>
  );
};

export default Footer;
