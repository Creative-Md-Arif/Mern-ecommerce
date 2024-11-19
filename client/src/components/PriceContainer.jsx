import React, { useEffect, useState } from "react";
import PriceFormet from "./PriceFormet";
import { twMerge } from "tailwind-merge";
import { useSelector } from "react-redux";

const PriceContainer = ({ item, className }) => {
  const { products } = useSelector((state) => state.orebi);
  const [cartProducts, setCartProducts] = useState(null);

  useEffect(() => {
    const existingProduct = products?.find(
      (product) => product?._id === item?._id
    );
    setCartProducts(existingProduct);
  }, [item, products]);

  const discountedPrice = cartProducts
    ? cartProducts?.quantity * item?.price
    : item?.price;

  const regularPrice = cartProducts
    ? item?.price * cartProducts?.quantity +
      (item?.discountedPercentage * (item?.price * cartProducts?.quantity)) /
        100
    : item?.price + (item?.discountedPercentage * item?.price) / 100;
  return (
    <div className={twMerge("flex items-center gap-2", className)}>
      <PriceFormet
        amount={regularPrice}
        className="line-through text-base font-normal text-lightText"
      />
      <PriceFormet
        amount={discountedPrice}
        className="font-semibold text-primary"
      />
    </div>
  );
};

export default PriceContainer;
