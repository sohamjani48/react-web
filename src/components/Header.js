import React, { useState, useContext } from "react";
import { LOGO_URL } from "../utils/consts";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser, setUsername } = useContext(UserContext);

  //Subscribing to the storee using Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between shadow-lg my-4 bg-orange-100 mx-2 rounded-md sm:bg-peach-200">
      <div className="logo-container">
        <img className="w-24 p-2 rounded-full" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex m-4">
          <li className="px-4 py-2 ">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4 py-2 hover:bg-red-200 rounded-lg">
            <Link to={"/"} style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-red-200 rounded-lg">
            <Link to={"/about"} style={{ textDecoration: "none" }}>
              About Us
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-red-200 rounded-lg">
            <Link to={"/contact"} style={{ textDecoration: "none" }}>
              Contact Us
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-red-200 rounded-lg">
            <Link to={"/grocery"} style={{ textDecoration: "none" }}>
              Grocery
            </Link>
          </li>

          <li className="px-4 py-2 hover:bg-red-200 rounded-lg">
            <Link to={"/cart"} style={{ textDecoration: "none" }}>
              {`Cart (${cartItems.length})`}
            </Link>
          </li>

          <button
            className="px-2 mx-4 bg-orange-800 text-white rounded-xl hover:shadow-xl"
            onClick={() => {
              btnText === "Login";
              if (btnText === "Login") {
                // setUsername("Soham Jani");
                setBtnText("Logout");
              } else {
                // setUsername("Guest User");
                setBtnText("Login");
              }
            }}
          >
            {btnText}
          </button>
          <li className="px-4 py-2 hover:bg-red-200 rounded-full w-18 h-18 font-bold">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
