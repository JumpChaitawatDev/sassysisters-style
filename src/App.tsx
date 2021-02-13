import React from "react";
import "./App.css";
import initializeFirebase from "./firebase/init";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./components/home/views/home";
import Dashboard from "./components/dashboard/views/dashboard";
import Orders from "./components/orders/views/orders";
import Products from "./components/products/views/products";
import Report from "./components/report/views/report";

import Nav from "./layouts/views/nav";
import Container from "./layouts/views/container";

function App() {
  initializeFirebase();

  const genNav = (ComponentItem: React.FC) => {
    return (
      <>
        <Nav />
        <ComponentItem />
      </>
    );
  };

  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Container>
              <Route exact path="/" component={() => genNav(Home)} />
              <Route path="/dashboard" component={() => genNav(Dashboard)} />
              <Route path="/orders" component={() => genNav(Orders)} />
              <Route path="/products" component={() => genNav(Products)} />
              <Route path="/report" component={() => genNav(Report)} />
            </Container>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
