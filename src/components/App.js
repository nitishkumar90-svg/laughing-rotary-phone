import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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

const App = () => {
  const products = [
    {
      id: 1442,
      name: `Blue Jacket`,
      isLiked: false,
      actualPrice: 50.0,
      sellingPrice: 39.0,
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci dolorem voluptates blanditiis repellat totam aut repellendus maiores laudantium, facilis pariat`,
      isFloneAssured: true,
      Rating: [1, 1, 1, 1, 0.5],
      colors: [
        { id: 1321, name: `Red` },
        { id: 2123, name: `White` },
        { id: 3555, name: `Blue` },
      ],
      sizes: [
        { id: 1111, name: `S` },
        { id: 212341234, name: `XL` },
        { id: 3432, name: `XXL` },
      ],
      imageURL: `2.jpg`,
    },
    {
      id: 1765,
      name: `Green Jacket`,
      isLiked: true,
      actualPrice: 46.0,
      sellingPrice: 11.0,
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci dolorem voluptates blanditiis repellat totam aut repellendus maiores laudantium, facilis pariat`,
      isFloneAssured: true,
      Rating: [1, 1, 0.5, 0, 0],
      colors: [
        { id: 13123213, name: `Green` },
        { id: 24234, name: `Yellow` },
      ],
      sizes: [
        { id: 13123, name: `S` },
        { id: 2423432, name: `XL` },
        { id: 37657, name: `XXL` },
      ],
      imageURL: `3.jpg`,
    },
    {
      id: 1986,
      name: `Black Jacket`,
      isLiked: false,
      actualPrice: 43.0,
      sellingPrice: 41.2,
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci dolorem voluptates blanditiis repellat totam aut repellendus maiores laudantium, facilis pariat`,
      isFloneAssured: true,
      Rating: [1, 1, 1, 1, 0],
      colors: [
        { id: 13123, name: `Red` },
        { id: 2467567, name: `White` },
        { id: 39876, name: `Blue` },
      ],
      sizes: [
        { id: 1453254, name: `S` },
        { id: 287, name: `XL` },
        { id: 398, name: `XXL` },
      ],
      imageURL: `5.jpg`,
    },
    {
      id: 1111,
      name: `Grey Jacket`,
      isLiked: false,
      actualPrice: 50.0,
      sellingPrice: 39.0,
      description: `1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci dolorem voluptates blanditiis repellat totam aut repellendus maiores laudantium, facilis pariat`,
      isFloneAssured: false,
      Rating: [1, 1, 1, 1, 0.5],
      colors: [],
      sizes: [],
      imageURL: `7.jpg`,
    },
  ];
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header />
          <Homepage />
          <Footer />
        </Route>
        <Route path="/products">
          <Main products={products} />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
