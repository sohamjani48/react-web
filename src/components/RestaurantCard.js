import React from "react";
import { CDN_URL } from "../utils/consts";

const RestaurantCard = (props) => {
  const {
    resData: { info },
  } = props;

  const { avgRating, sla, cuisines, name, id, cloudinaryImageId } = info;

  return (
    <div
      className="restaurant-card"
      style={{ backgroundColor: "#F0F0F0" }}
      key={id}
    >
      <img
        alt="restaurant Logo"
        src={CDN_URL + cloudinaryImageId}
        className="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{`${avgRating} stars`}</h4>
      <h4>{`${sla.deliveryTime} minutes`}</h4>
    </div>
  );
};

export default RestaurantCard;
