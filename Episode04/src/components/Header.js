import { useContext, useState } from "react";
import { LOGO_LINK } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  let [log, setLog] = useState("Login");
  const data = useContext(UserContext);

  //get cart items from the store using selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between items-center m-5 p-4 bg-pink-100 shadow-sm">
      <div className="w-52">
        <img className="logo" src={LOGO_LINK} />
      </div>
      <div className="nav-items">
        <ul className="flex gap-4">
          <li>Online Status: {useOnlineStatus() ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="font-bold">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              log === "Login" ? setLog("Logout") : setLog("Login");
            }}
          >
            {log}
          </button>
          <li>{data.loggedInInfo}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
