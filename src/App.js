import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/layout/Navbar";
import Home from "./components/pages/home/Home";
import Shipping from "./components/pages/shipping/Shipping";
import About from "./components/pages/about/About";
import PersonalOrders from "./components/pages/personalorders/PersonalOrders";
import Shop from "./components/pages/shop/Shop";
import DreamcatcherDetails from "./components/dreamcatcher/dreamcatcherDetails"
import Authentication from "./components/pages/auth/Authentication"
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
            <Route exact path="/console" component={Console} />
            <Route exact path="/dreamcatcher/:model" component={DreamcatcherDetails} />
            <Route exact path="/signout" component={Home} />
            <Route exact path="/authentication" component={Authentication} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
