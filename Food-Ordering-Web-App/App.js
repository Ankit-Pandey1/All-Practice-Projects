import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./Assets/logo.png";
import { CartOutline } from "react-ionicons";
/**
 * Header
 *  - Logo
 *  - Nav bar
 * Body
 *  - Search
 *  - Resraurant Container
 *  - Restaurant Card
 *    - Images of the restaurant
 *    - Name of res, rating,cuesins,       *      delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Adress
 *  - Contact
 */
// class-based components are the the old way of writing the code

const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="logo" src={logo} alt="Brand Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <CartOutline
            className="cart"
            color={"#00000"}
            title={CartOutline}
            height="30px"
            width="30px"
          />
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCart = () => {
  return (
    <div className="res-card">
      <h3>Roll Corner</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="input-bar"
          placeholder="search for food and restaurents"
        />
        <button className="search-btn">Search</button>
      </div>
      <div className="restaurant-container">
        <RestaurantCart />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
