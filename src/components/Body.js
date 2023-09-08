import React, { useEffect, useState, useContext } from "react";
import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import { SWIGGY_URL } from "../utils/consts";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);

    const jsonObj = await data.json();
    setListOfRestaurants(
      jsonObj.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurants(
      jsonObj.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  const RestaurantCardVeg = withVegLabel(RestaurantCard);

  if (!onlineStatus) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <h1>No Internet Connection</h1>
      </div>
    );
  }

  const { loggedInUser, setUsername } = useContext(UserContext);

  return !listOfRestaurants.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex items-center">
        <div className="m-4">
          <input
            type="text"
            className="mx-2 px-2 border border-solid border-black rounded-md"
            value={searchText}
            data-testid="searchInput"
            onChange={(event) => {
              setSearchText(event.target.value);
              if (event.target.value.length < 1) {
                setFilteredRestaurants(listOfRestaurants);
              }
            }}
          />
          <button
            className="px-2 py-0.5 m-2 bg-green-100 rounded-md border border-solid border-green-300"
            onClick={() => {
              setFilteredRestaurants(
                listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>
        <div className="mx-2">
          <button
            className="px-2 py-0.5 bg-orange-200 border border-solid border-red-300 rounded-md"
            onClick={() => {
              setFilteredRestaurants(
                listOfRestaurants.filter((res) => res.info.avgRating > 4)
              );
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((resObj) => {
          return (
            <Link
              to={"/restaurants/" + resObj.info.id}
              key={resObj.info.id}
              style={{ textDecoration: "none", color: "black" }}
            >
              {!resObj.info.veg ? (
                <RestaurantCard resData={resObj} />
              ) : (
                <RestaurantCardVeg resData={resObj} />
              )}
              {/* <RestaurantCard resData={resObj} /> */}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
