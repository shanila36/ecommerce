import React from "react";
import "./App.css";
import Header from "./Header";
import HomePage from './HomePage'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./Login";
import {Product_page_mens_new} from './Product_page'
import {Product_page_womens_new} from './Product_page'
import Product_page_men from './Product_page_men'
import Product_page_women from './Product_page_women'
import {useStateValue} from "./StateProvider";
import Checkout from "./Checkout";

function App() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <Router>
    <div className="App">
    <Switch>
    <Route path="/login">
      <Login></Login>
     </Route>
     <Route path="/checkout">
      <Header></Header>
      <Checkout></Checkout>
    </Route>
    <Route path="/womens">
     <Header></Header>
      <Product_page_women></Product_page_women>
     </Route>
    <Route path="/mens">
     <Header></Header>
      <Product_page_men></Product_page_men>
     </Route>
     <Route path="/mens-new">
     <Header></Header>
      <Product_page_mens_new></Product_page_mens_new>
     </Route>
     <Route path="/womens-new">
     <Header></Header>
      <Product_page_womens_new></Product_page_womens_new>
     </Route>
      <Route path="/">
      <Header></Header>
      <HomePage></HomePage>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
