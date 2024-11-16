import React from "react";
import Title from "./Title";
import PriceContainer from "./PriceContainer";
import AddToCartButton from "./AddToCartButton";
import ProductDescription from "./ProductDescription";

const ProductInfo = ({ product ,  }) => {
  return (
    <div className="flex justify-center flex-col gap-5">
      <Title className="text-4xl">{product?.name}</Title>
      <PriceContainer item={product} />
      <ProductDescription description={product?.description} />
      
      <p>Be the first to review this product!</p>
      <div>
        <p>
          <span className="font-semibold">Category:</span> {product?.category}
        </p>
        <p>
          <span className="font-semibold">Brand:</span> {product?.brand}
        </p>
      </div>
      <AddToCartButton item={product} />
    </div>
  );
};

export default ProductInfo;
