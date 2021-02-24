import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "../stateProvider";
import ReviewProducts from "./ReviewProducts";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer.js";
import axios from "../../axios";
import { db } from "../../firebase";

function Payment() {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();
  //stripe payment
  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        //stripe expects the total in a currencies subunits (100)
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
      console.log("response data 😀", response.data);
    };
    getClientSecret();
  }, [basket]);

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
  const currDate = new Date();
  const year = currDate.getFullYear();
  const month = monthNames[currDate.getMonth()];
  const date = currDate.getDate() + 2;
  const day = currDate.toDateString();

  const handleSubmit = async (e) => {
    //do all the fancy stripe stuff..
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent = payment confirmation
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        // db.collection("users").doc(user?.uid).collection("basket").set();

        history.replace("/orders");
      });
  };
  const handleChange = (e) => {
    //Listen for changes in the CardElement
    //and display any errors as the customer types their card details
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
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
            <Link to="/">Change</Link>
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
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  key="1"
                  renderText={(value) => <h3>Order Total: {value} </h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
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
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    day={day}
                    year={year}
                    month={month}
                    qty={item.qty}
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
