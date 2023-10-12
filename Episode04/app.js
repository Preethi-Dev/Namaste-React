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

const RestaurantCard = (resImg, resName, resRating) => {
  return (
    <div className="res-card">
      <img width="100%" src={resImg} />
      <h3 style={{ textTransform: "uppercase" }}>{resName}</h3>
      <p>{resRating}</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {RestaurantCard(
          "https://cdn-p300.americantowns.com/img/article/nj-indian-restaurants-1.jpg",
          "Meghana foods",
          "4.4 Ratings"
        )}
        {RestaurantCard(
          "https://www.eatthis.com/wp-content/uploads/sites/4/2021/11/kfc-fried-chicken.jpg?quality=82&strip=1",
          "KFC",
          "4.8 Ratings"
        )}
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
