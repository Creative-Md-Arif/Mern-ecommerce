import React from "react";
import Title from "../components/Title";
import { useSelector } from "react-redux";
import Container from "../components/Container";
import emptyCart from "../assets/images/emptyCart.png";
import { Link } from "react-router-dom";

const Cart = () => {
  const { products } = useSelector((state) => state.orebi);

  return (
    <Container>
      <Title>My Cart</Title>
      {products?.length > 0 ? (
        <div className="py-10">Product</div>
      ) : (
        <div className="py-10">
          <img src={emptyCart} alt="emptyCart" className="max-w-80" />
          <div className="flex flex-col gap-2.5 mt-5">
            <h2 className="text-xl font-bold uppercase">Your cart is empty</h2>
            <p className="text-sm max-w-96 text-lightText">
              Add items to it now in the homepage or on the product page
            </p>
            <Link to="/shop" className="bg-black/80 text-white py-2 px-6 w-48 text-center rounded-md hover:bg-primary hoverEffect">
             Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Cart;
