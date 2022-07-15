import React from "react";

export const AddToCartButton = ({ isInCart, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={isInCart}
      className={`text-white w-full ${
        isInCart ? "bg-cadet hover:bg-cadet" : "bg-tan hover:bg-tan"
      } border-0 py-2 px-6 focus:outline-none  rounded text-lg`}
    >
      {isInCart ? "In Cart" : "Add to Vote Cart"}
    </button>
  );
};

export default AddToCartButton;
