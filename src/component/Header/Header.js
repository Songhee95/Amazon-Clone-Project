import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LocationIcon from "@material-ui/icons/LocationOn";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../stateProvider";
import { auth } from "../../firebase";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <>
      <div className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="header"
          />
        </Link>
        <div className="header__location">
          <LocationIcon className="header__location__icon" />
          <div className="header__location__divide">
            <span className="header__location__address">Hello</span>
            <span className="header__location__city">Select your address</span>
          </div>
        </div>
        <div className="header__search">
          <select
            className="header__selectCategory"
            name="category"
            type="select"
          >
            <option value="All" defaultValue>
              All
            </option>
          </select>
          <input type="text" className="header__searchInput" />
          <div className="header__searchIcon__wrap">
            <SearchIcon className="header__searchIcon" />
          </div>
        </div>
        <div className="header__nav">
          <Link to={!user && "/login"}>
            <div onClick={handleAuthentication} className="header__option">
              <span className="header__optionLineOne">
                Hello {!user ? "Guest" : user.displayName}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>

      <div className="header__bottom__wrap">
        <span className="header__bottom__box">
          <Link className="header__bottom__link__hamburger">
            <MenuIcon />
            All
          </Link>
        </span>
        <span className="header__bottom__box">
          <Link className="header__bottom__link">
            {!user ? "Best Seller" : "Subscribe & Save"}
          </Link>
        </span>
        <span className="header__bottom__box">
          <Link className="header__bottom__link">
            {!user ? "Prime" : "Buy Again"}
            {!user && <ArrowDropDownIcon />}
          </Link>
        </span>
        <span className="header__bottom__box">
          <Link className="header__bottom__link">
            {!user ? "Guest" : user.displayName}'s Amazon.com
          </Link>
        </span>
        <span className="header__bottom__box">
          <Link className="header__bottom__link">Today's Deals</Link>
        </span>
        <span className="header__bottom__box">
          <Link className="header__bottom__link">
            {!user ? "New Releases" : "Customer Service"}
          </Link>
        </span>
        <span className="header__bottom__box">
          <Link className="header__bottom__link">
            {!user ? "Books" : "Prime"}
            {user && <ArrowDropDownIcon />}
          </Link>
        </span>
        <span className="header__bottom__box">
          <Link className="header__bottom__link">{!user && "Find a gift"}</Link>
        </span>
        <span className="header__bottom__box">
          <Link className="header__bottom__link">{!user && "Fashion"}</Link>
        </span>
      </div>
    </>
  );
}

export default Header;
