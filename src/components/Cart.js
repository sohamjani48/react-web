import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex-col flex-1 text-center m-4 p-4">
      <h1 className="font-bold text-xl">Your Cart</h1>
      {cartItems.length ? (
        <div className="w-6/12 bg-yellow-100 shadow-lg p-4 mx-auto my-2 rounded-xl">
          <button
            className="p-2 m-4 bg-black text-white rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          <ItemList items={cartItems} />
        </div>
      ) : (
        <div className="flex-col text-center justify-center text-xl font-bold m-10">
          Your Cart is Empty !! Please add items in your cart
        </div>
      )}
    </div>
  );
};

export default Cart;
