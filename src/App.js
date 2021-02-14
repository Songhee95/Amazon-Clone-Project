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

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        console.log(authUser);
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
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/payment">
              <Header />
              <Payment />
            </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
