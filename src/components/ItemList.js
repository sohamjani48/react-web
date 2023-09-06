import React from "react";
import { CDN_URL } from "../utils/consts";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="p-2 m-2">
      {items.map((item) => {
        const { id, name, description, price, defaultPrice, isVeg, imageId } =
          item.card.info;
        return (
          <div className="border-black border-b-2 my-2 p-2">
            <div className="flex justify-between">
              <span>
                <span>
                  <span className="font-bold pr-2">{name}</span>
                  {isVeg ? <span>{"🥦"}</span> : <></>}
                </span>
                <span className="italic font-semibold">{` -  Rs. ${
                  (price || defaultPrice) / 100
                }`}</span>
              </span>
              <span>
                <button
                  className="px-2 py-1 bg-white font-bold border-black rounded-lg border-[1px] text-sm"
                  onClick={() => {
                    handleAddItem(item);
                  }}
                >
                  + Add
                </button>
              </span>
            </div>
            <div className="flex my-2">
              <img src={CDN_URL + imageId} className=" w-28 rounded-lg" />
              <div className="m-2 text-sm italic">{`${description}`}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
