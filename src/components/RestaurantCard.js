import React from "react";
import { CDN_URL } from "../utils/consts";

const RestaurantCard = (props) => {
  const {
    resData: { info },
  } = props;

  const { avgRating, sla, cuisines, name, id, cloudinaryImageId } = info;

  return (
    <div
      className="m-4 p-4 w-[250px] rounded-xl bg-yellow-100 hover:bg-yellow-200 text-center"
      key={id}
      data-testid="resCard"
    >
      <img
        alt="restaurant Logo"
        src={CDN_URL + cloudinaryImageId}
        className="rounded-lg"
      />
      <h3 className="py-2 font-bold ">{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{`${avgRating} stars`}</h4>
      <h4 className="font-semibold">{`Delivery Time - ${sla.deliveryTime} minutes`}</h4>
    </div>
  );
};

//Higher Order Component

// input: restaurantCard ==> RestaurantCardVeg

export const withVegLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-600 italic rounded-lg px-3 text-white">
          Pure Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
