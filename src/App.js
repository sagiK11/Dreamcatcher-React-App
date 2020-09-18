import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/layout/Navbar";
import Home from "./components/pages/home/Home";
import Shipping from "./components/pages/shipping/Shipping";
import About from "./components/pages/about/About";
import PersonalOrders from "./components/pages/personalorders/PersonalOrders";
import Shop from "./components/pages/shop/Shop";
import DreamcatcherDetails from "./components/dreamcatcher/dreamcatcherDetails"
import SignIn from "./components/pages/auth/SignIn"
import SignUp from "./components/pages/auth/SignUp"
import Cart from "./components/pages/cart/Cart"
import Console from "./components/pages/console/Console"
import "./App.css";



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/shipping-policy" component={Shipping} />
            <Route exact path="/about" component={About} />
            <Route exact path="/personal-orders" component={PersonalOrders} />
            <Route exact path="/add-item" component={Console} />
            <Route exact path="/dreamcatcher/:model" component={DreamcatcherDetails} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signout" component={Home} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
