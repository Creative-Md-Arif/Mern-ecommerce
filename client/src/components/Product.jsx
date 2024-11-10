import React from "react";
import Badge from "./Badge";
import PriceContainer from "./PriceContainer";
import TextWithShowMore from "./TextWithShowMore";
import AddToCartButton from "./AddToCartButton";

const Product = ({ item }) => {
  // console.log(item);

  return (
    <div className="w-full group pr-2.5 relative">
      <div className="overflow-hidden h-80 border border-gray-300 rounded-tr-md rounded-tl-md relative">
        <div className="w-full h-full overflow-hidden bg-[#f3f3f3]">
          <img
            src={item?.images[0]}
            alt="productImage"
            className=" w-full h-full object-cover group-hover:scale-110 duration-300"
          />
        </div>
        <div className="absolute top-2 right-2">
          {item?.offer && <Badge title="sale" />}
        </div>
      </div>
      <div className="w-full py-4 flex flex-col gap-1 border-[1px] border-t-0 border-gray-300 px-3 rounded-b-md">
        <TextWithShowMore text={item?.name} />
        <PriceContainer item={item} />
        <AddToCartButton item={item}  className="shadow-2xl"/>
      </div>
    </div>
  );
};

export default Product;
