import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../redux/orebiSlice";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";

const AddToCartButton = ({ item, className }) => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.orebi);
  const [cartProducts, setCartProducts] = useState(null);

  useEffect(() => {
    const existingProduct = products?.find(
      (product) => product?._id === item?._id
    );
    setCartProducts(existingProduct);
  }, [item, products]);

  const handleAddToCart = () => {
    dispatch(addToCart(item));
    toast.success(`${item.name} added to cart`);
  };

  const handleIncrement = () => {
    dispatch(increaseQuantity(item?._id));
    toast.success(`${item.name} incremented successfully`);
  };

  const handleDecrement = () => {
    dispatch(decreaseQuantity(item?._id));
    toast.success(`${item.name} decremented successfully`);
  };

  return (
    <div className="h-12">
      {cartProducts ? (
        <div className="w-full h-full flex items-center gap-2">
          <button
            onClick={handleDecrement}
            disabled={cartProducts?.quantity === 1}
            className=" w-6 h-6 border inline-flex items-center justify-center border-gray-400 rounded-sm hover:bg-gray-950
             hover:text-white hoverEffect cursor-pointer disabled:text-gray-400 disabled:cursor-not-allowed disabled:border-gary-200 disabled:bg-transparent disabled:hoverEffect disabled:hover:text-gray-400"
          >
            <HiOutlineMinus />
          </button>
          <p className="text-base font-semibold w-6 text-center">
            {cartProducts?.quantity}
          </p>
          <button
            onClick={handleIncrement}
            className=" w-6 h-6 border inline-flex items-center justify-center border-gray-400 rounded-sm hover:bg-gray-950 hover:text-white hoverEffect cursor-pointer"
          >
            <HiOutlinePlus />
          </button>
        </div>
      ) : (
        <button
          className={twMerge(
            "px-4 py-2 bg-[#f1f1f1] text-[#000] rounded-md",
            className
          )}
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default AddToCartButton;
