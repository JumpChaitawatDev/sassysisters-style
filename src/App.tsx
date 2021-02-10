import React from "react";
import "./App.css";
import initializeFirebase from "./firebase/init";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/home/views/home";
import Dashboard from "./components/dashboard/views/dashboard";
import Orders from "./components/orders/views/orders";
import Products from "./components/products/views/products";
import Report from "./components/report/views/report";

import Nav from "./layouts/views/nav";
import Container from "./layouts/views/container";

function App() {
  initializeFirebase();

  return (
    <div>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Container>
              <Route exact path="/" component={Home} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/orders" component={Orders} />
              <Route path="/products" component={Products} />
              {/* <Route path="/management" component={Products} /> */}
              <Route path="/report" component={Report} />
            </Container>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
