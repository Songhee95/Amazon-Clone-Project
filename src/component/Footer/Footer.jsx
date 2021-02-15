import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { ScrollTo } from "react-scroll-to";
import FooterHead from "./FooterHead";
import FooterSub from "./FooterSub";
import LanguageIcon from '@material-ui/icons/Language';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';

function Footer() {
  return (
    <>
      <ScrollTo>
        {({ scroll }) => (
          <div
            className="footer__backtotop__link"
            onClick={() => scroll({ x: 0, y: 0 })}
          >
            Back to Top
          </div>
        )}
      </ScrollTo>
      <div className="footer__body">
        <FooterHead />
        <div className="footer__middle">
          {" "}
          <img
            className="footer__middle__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="header"
          />
          <button className='footer__middle__button'><LanguageIcon/>English <UnfoldMoreIcon/></button>
          <button className='footer__middle__button'>😀 United States </button>
        </div>
        <FooterSub />
      </div>
    </>
  );
}

export default Footer;
