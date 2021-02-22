import React, { useEffect } from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./component/Checkout/Checkout";
import Login from "./component/Login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./component/stateProvider";
import CreateAccount from "./component/CreateAccount/CreateAccount";
import Payment from "./component/Payment/Payment";
import Footer from "./component/Footer/Footer";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./component/Orders/Orders";

const promise = loadStripe(
  "pk_test_51IMHDbFQysOK7S4CRTjfyuY41YcRshtIp0Zp3XVqIOEbyShJAzAdiJ95CtXfkRhr1j728aiBXeQRZUe5wqvOWCct00pQSfsLdD"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //The user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <>
      <Router>
        <div className="app">
          <Switch>
            <Route path="/createAccount">
              <CreateAccount />
            </Route>
            <Route path="/orders">
              <Header />
              <Orders />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/checkout">
              <Header />
              <Checkout />
              <Footer />
            </Route>
            <Route path="/payment">
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
              <Footer />
            </Route>
            <Route path="/">
              <Header />
              <Home />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
