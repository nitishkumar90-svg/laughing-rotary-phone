import React, { useState, useEffect, useContext } from "react";
import { Switch, Route } from 'react-router-dom';
import "../css/App.css";
import Footer from "./Shared/Footer";
import Header from "./Shared/Header";
import "../css/reset.css";
import "../css/style.css";
import "../css/responsive.css";
import Main from "./Homepage/Main";
import ProductPage from "./Homepage/Products/ProductPage";
import Page404 from "./Shared/Page404";
import Homepage from "./Homepage/Homepage";


import { mainProducts } from '../Context/mainContext';

const App = () => {

  const { filteredProducts } = useContext(mainProducts);
  return (
    <Switch>

      <Route exact path="/" component={Homepage} />

      <Route exact path="/products">
        <Main products={filteredProducts} />
      </Route>

      <Route path="*">
        <Header />
        <Page404 />
        <Footer />
      </Route>

    </Switch>
  );
};

export default App;
