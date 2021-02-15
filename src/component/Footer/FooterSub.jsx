import React from "react";
import "./Footer.css";
import FooterSubNav from "./FooterSubNav";
function FooterSub() {
  return (
    <>
      <div className="footer__sub__bottom">
        <table className="footer__sub__bottom">
          <span className="footer__sub__td__wrap">
            <FooterSubNav title="Amazon Music" sub="Stream millions of songs" />
            <FooterSubNav
              title="Sell on Amazon"
              sub="Start a Selling Account"
            />
            <FooterSubNav
              title="Amazon Web Services"
              sub="Scalable Cloud Computing Services"
            />
            <FooterSubNav title="Fabric" sub="Sewing, Quilting & Knitting" />
            <FooterSubNav title="Shopbob" sub="Designer Fashion Brands" />
            <FooterSubNav title="" sub="" />
          </span>
          <span className="footer__sub__td__wrap">
            <FooterSubNav
              title="Amazon Advertising"
              sub="Find, attract, and engage customers"
            />
            <FooterSubNav
              title="Amazon business"
              sub="Everything For Your Business"
            />
            <FooterSubNav
              title="Audible"
              sub="Listen to Books & Original Audio Performances"
            />
            <FooterSubNav
              title="Goodreads"
              sub="Book reviews & recommendations"
            />
            <FooterSubNav
              title="Amazon Warehouse"
              sub="Great Deals on Quality Used PProducts"
            />
            <FooterSubNav
              title="Neighbors App"
              sub="Real-Time Crime & Safety Alerts"
            />
          </span>
          <span className="footer__sub__td__wrap">
            <FooterSubNav title="Amazon Drive" sub="Amazon Fresh" />
            <FooterSubNav title="Amazon Fresh" sub="Groceries & More" />
            <FooterSubNav
              title="Book Depository"
              sub="Books With Free Delivery Worldwide"
            />
            <FooterSubNav title="IMDB" sub="Movies, TV & Celebrities" />
            <FooterSubNav
              title="Whole Foods Market"
              sub="America's Healthiest Grocery Store"
            />
            <FooterSubNav
              title="Amazon Subscription Boxes"
              sub="Top subscription boxes-right to your door"
            />
          </span>
          <span className="footer__sub__td__wrap">
            <FooterSubNav title="6pm" sub="Store deals on fashion brands" />
            <FooterSubNav
              title="Amazon Global"
              sub="Shi[ Orders internationally"
            />
            <FooterSubNav
              title="Box Office Mojo"
              sub="Find Movie Box Office Data"
            />
            <FooterSubNav
              title="IMDBPro"
              sub="Get Info Entertainment Professionals Need"
            />
            <FooterSubNav title="Woot!" sub="Deals and Shenanigans" />
            <FooterSubNav title="PillPack" sub="Pharmacy Simplified" />
          </span>
          <span className="footer__sub__td__wrap">
            <FooterSubNav title="AbeBooks" sub="Books , art & collectibles" />
            <FooterSubNav
              title="Home Services"
              sub="/experienced Pros Happiness Guarantee"
            />
            <FooterSubNav
              title="ComiXology"
              sub="Thousands of Digital Comics"
            />
            <FooterSubNav
              title="Kindle Direct Publishing"
              sub="Indie Digital & Print Publishing Made Easy"
            />
            <FooterSubNav title="Zappos" sub="Shoes & Clothing" />
            <FooterSubNav
              title="Amazon Renewed"
              sub="Like-new products you can trust"
            />
          </span>
          <span className="footer__sub__td__wrap">
            <FooterSubNav title="ACX" sub="Audiobook Publishing Made Easy" />
            <FooterSubNav
              title="Amazon Ignite"
              sub="Sell your original Digital Educational Resources"
            />
            <FooterSubNav title="DPReview" sub="digital Photography" />
            <FooterSubNav
              title="Amazon Photos"
              sub="Unlimited Photo Storage Free With Prime"
            />
            <FooterSubNav
              title="Amazon Second Chance"
              sub="Pass it on, trade it in, give it a second life"
            />
            <FooterSubNav title="" sub="" />
          </span>
          <span className="footer__sub__td__wrap">
            <FooterSubNav
              title="Alexa"
              sub="Actionable Analytics for the Web"
            />
            <FooterSubNav
              title="Amazon Rapids"
              sub="Fun stories for kids on the go"
            />
            <FooterSubNav title="East Dane" sub="Designer Men's Fashion" />
            <FooterSubNav
              title="Prime Video Direct"
              sub="video distribution Made Easy"
            />
            <FooterSubNav
              title="eero WiFi"
              sub="Stream 4k Video in Every Room"
            />
            <FooterSubNav title="" sub="" />
          </span>
        </table>
      </div>
      <div className="footer__sub__footer">
        <a href='/'>Conditions of Use </a>
        <a href='/'>Privacy Notice </a> 
        <a href='/'>Interst-Based Ads </a>
        <a href='/'>&copy; 2021-2021, songhee.com, songhee</a>
      </div>
    </>
  );
}

export default FooterSub;
