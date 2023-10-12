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

const App = () => {
  return (
    <div>
      <h1>Food Ordering App</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
