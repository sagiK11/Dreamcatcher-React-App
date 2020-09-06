import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/layout/Navbar";
import Home from "./components/pages/home/Home";
import Shipping from "./components/pages/Shipping";
import About from "./components/pages/about/About";
import PersonalOrders from "./components/pages/PersonalOrders";
import Shop from "./components/pages/Shop";

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
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
