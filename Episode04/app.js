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

const App = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
