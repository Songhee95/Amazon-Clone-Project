import React from "react";
import "./Payment.css";
import { useStateValue } from "../stateProvider";
import ReviewProducts from "./ReviewProducts";
import { Link } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  //stripe payment
  const stripe = useStripe();
  const elements = useElements();

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currDate = new Date();
  const year = currDate.getFullYear();
  const month = monthNames[currDate.getMonth()];
  const date = currDate.getDate() + 2;
  const day = dayNames[currDate.getDay() + 2];

  return (
    <div className="payment">
      <div className="payment__container">
        <h1 className="payment__header">
          Checkout (
          <Link to="/checkout">
            {basket?.length} {basket.length === 1 ? "item" : "items"}
          </Link>
          )
        </h1>
        {/* Payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>1</h3>
            <h3>Shipping Address</h3>
          </div>
          <div className="payment__address">
            <div>123 React Lane</div>
            <div>Atlanta, GA</div>
          </div>
          <div className="payment__change__btn">
            <Link>Change</Link>
          </div>
        </div>
        {/* Payment section - Payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>2</h3>
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe magic will go */}
            <form>
              <CardElement />
            </form>
          </div>
        </div>
        {/* Payment section - Review items */}
        <div className="payment__section__review">
          <div className="payment__title">
            <h3>3</h3>
            <h3>Review items and shipping</h3>
          </div>
          <div className="payment__section__review__detail__wrap">
            <div className="payment__items">
              {basket.map((item) => (
                <div className="payment__section__review__items">
                  <div className="payment__section__review__delivery__date">
                    Delivery date: {`${month}. ${date},${year}`}
                  </div>
                  <div className="payment__section__review__sub">
                    Items shipped from songsAmazon.com
                  </div>
                  <ReviewProducts
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    day={day}
                    year={year}
                    month={month}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="payment__side__container">
        <div className="payment__subtotal__title">
          <h3>
            Subtotal (<Link to="/checkout">{basket?.length} items</Link>)
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Payment;
