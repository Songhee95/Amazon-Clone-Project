import "./App.css";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./component/Checkout/Checkout";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Header />
          <Switch>
            <Route path="login">
              <h1>login page</h1>
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
