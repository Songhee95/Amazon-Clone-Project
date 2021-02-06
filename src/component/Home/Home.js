import React from "react";
import Product from "../Product/Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="1"
            title="Clean Code: A Handbook of Agile Software Craftsmanship 1st Edition"
            price={49.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41yafGMO+rL._SX376_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="Learn JavaScript Quickly: A Complete Beginner’s Guide to Learning JavaScript, Even If You’re New to Programming (Crash Course With Hands-On Project) Paperback – November 10, 2020"
            price={18.99}
            image="https://m.media-amazon.com/images/I/61-+gHv1xAL._AC_UL480_FMwebp_QL65_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Full-Stack React Projects: Learn MERN stack development by building modern web apps using MongoDB, Express, React, and Node.js, 2nd Edition Paperback – April 17, 2020"
            price={34.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51BqNmSO6uL._SX404_BO1,204,203,200_.jpg"
            rating={4}
          />
          <Product
            id="4"
            title="HTML and CSS: Design and Build Websites 1st Edition"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/31b4K-hFH-L._SX395_BO1,204,203,200_.jpg"
            rating={4}
          />
          <Product
            id="5"
            title="Oracle SQL By Example 4th Edition"
            price={27.79}
            image="https://images-na.ssl-images-amazon.com/images/I/41qG9CKgUOL._SX381_BO1,204,203,200_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="The Full Stack Developer: Your Essential Guide to the Everyday Skills Expected of a Modern Full Stack Web Developer Paperback – November 20, 2018"
            price={24.49}
            image="https://images-na.ssl-images-amazon.com/images/I/41DUtSO3lIL._SX348_BO1,204,203,200_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
