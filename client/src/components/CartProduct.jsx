import React from "react";
import { ImCross } from "react-icons/im";
import { toast } from "react-hot-toast";
import PriceContainer from "./PriceContainer";
import PriceFormet from "./PriceFormet";
import AddToCartButton from "./AddToCartButton";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/orebiSlice";

const CartProduct = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full grid grid-cols-5 mb-4 border py-2">
      <div className="flex col-span-5 md:col-span-2 items-center gap-4 ml-4">
        <ImCross
          onClick={() => {
            dispatch(deleteProduct(item._id));
            toast.success(
              `${item?.name.substring(0, 10)}...deleted successfully`
            );
          }}
          className="text-primary hover:text-red-500 hoverEffect cursor-pointer"
        />
        <img
          src={item?.images[0]}
          alt="productImage"
          className="w-32 h-32 object-cover"
        />
        <h1>
          {item?.name && item.name.split(" ").length === 3
            ? item.name
            : item.name.substring(0, 20) + "..."}
        </h1>
      </div>
      <div className="col-span-5 md:col-span-3 flex flex-col md:flex-row  md:items-center justify-between p-4 md:p-0">
        <div className="flex w-1/3 items-center">
          <PriceContainer item={item} className="text-sm" />
        </div>
        <div className="flex w-1/3 items-center gap-6 text-lg">
          <AddToCartButton item={item} />
        </div>
        <div className="flex w-1/3 items-center">
          <PriceFormet amount={item?.price * item?.quantity} />
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
