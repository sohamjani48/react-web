import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { CATEGORY_TYPE } from "../utils/consts";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(1);

  if (resInfo === null) return <Shimmer />;

  const { id, name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (resCard) => resCard?.card?.card["@type"] === CATEGORY_TYPE
    );

  return (
    <div className="flex flex-col m-4 p-4">
      <h1 className="font-bold text-3xl text-center m-2">{name}</h1>
      <p className="italic text-center font-semibold text-lg">
        {cuisines?.join(", ") + " - " + costForTwoMessage}
      </p>
      {categories.map((category, index) => {
        return (
          // Controlled Component
          <RestaurantCategory
            data={category?.card?.card}
            key={category?.card?.card.title}
            expandItems={() => {
              if (index === showIndex) {
                setShowIndex(-1);
              } else {
                setShowIndex(index);
              }
            }}
            showItems={index === showIndex ? true : false}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
