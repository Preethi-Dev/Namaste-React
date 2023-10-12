import React from "react";
import ReactDOM from "react-dom/client";

/*
 * Header
 *   - Logo
 *   - Nav Items
 * Body
 *   - Search
 *   - RestrauntContainer
 *   - RestrauntCard
 * Footer
 *   - Copyright
 *   - Links
 *   - Address
 *   - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.creativefabrica.com/wp-content/uploads/2022/03/07/Restaurant-yummy-food-logo-design-Graphics-26620420-1-580x387.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  return (
    <div className="res-card">
      <img width="100%" src={props.resImg} />
      <h3 style={{ textTransform: "uppercase" }}>{props.resName}</h3>
      <p>{props.resRating}</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resImg="https://cdn-p300.americantowns.com/img/article/nj-indian-restaurants-1.jpg"
          resName="Meghana foods"
          resRating="4.4 Ratings"
        />
        <RestaurantCard
          resImg="https://www.eatthis.com/wp-content/uploads/sites/4/2021/11/kfc-fried-chicken.jpg?quality=82&strip=1"
          resName="KFC"
          resRating="4.9 Ratings"
        />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
