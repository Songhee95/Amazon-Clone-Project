import React from "react";
import "./Payment.css";
import { useStateValue } from "../stateProvider";
import CheckoutProduct from "../Checkout/CheckoutProduct";
import { Link } from "react-router-dom";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">
        {/* Payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.displayName}</p>
            <p>123 React Lane</p>
            <p>Atlanta, GA</p>
          </div>
        </div>
        {/* Payment section - Review items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* Payment section - Payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">{/* Stripe magic will go */}</div>
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
