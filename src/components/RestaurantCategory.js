import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, expandItems }) => {
  const { title, itemCards } = data;

  const handleClick = () => {
    expandItems();
  };

  return (
    <div>
      <div className="w-8/12 bg-yellow-100 shadow-lg p-4 mx-auto my-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">{`${title} (${itemCards.length})`}</span>
          <span>{showItems ? "⬆️" : "⬇️"}</span>
        </div>
        {showItems ? <ItemList items={itemCards} /> : <></>}
      </div>
    </div>
  );
};

export default RestaurantCategory;
