import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { useDispatch, useSelector } from "react-redux";
import Container from "../components/Container";
import emptyCart from "../assets/images/emptyCart.png";
import { Link } from "react-router-dom";
import CartProduct from "../components/CartProduct";
import Swal from "sweetalert2";
import { resetCart } from "../redux/orebiSlice";
import PriceContainer from "../components/PriceContainer";
import PriceFormet from "../components/PriceFormet";
import toast from "react-hot-toast";

const Cart = () => {
  const { products } = useSelector((state) => state.orebi);
  const dispatch = useDispatch();
  const [subTotal , setSubTotal] = useState("");
  const [discount , setDiscount] = useState("")

  // useEffect(() => {

  //   let price = 0;
  //   let discountedPrice = 0;
  //   products?.map((item) => {
  //     price += (item)
  //   })
  
  // }, []);













  const handleReset = () => {
    Swal.fire({
      title: `Are you sure you want to clear your cart?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        // User confirmed the action
        dispatch(resetCart());
        Swal.fire("Deleted!", "Your cart has been cleared.", "success");
      }
    });
  };

  return (
    <Container>
      <Title>My Cart</Title>
      {products?.length > 0 ? (
        <div className="py-10">
          <div className="w-full h-20 bg-[#f5f7f7] text-primary hidden lg:grid grid-cols-5 place-content-center px-6 text-lg font-semibold">
            <h2 className="col-span-2">Product</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
            <h2>SubTotal</h2>
          </div>
          <div className="mt-5">
            {products?.map((item) => (
              <CartProduct key={item._id} item={item} />
            ))}
          </div>
          <div className="flex items-start justify-between">
            <button
              onClick={handleReset}
              className="py-2.5 px-10 bg-red-500 text-white font-semibold uppercase mb-4 rounded-md hover:bg-red-700 hoverEffect"
            >
              Reset cart
            </button>
            <div className="max-w-xl gap-4 flex justify-end mt-4">
              <div className="w-96 flex flex-col gap-4">
                <h2 className="text-xl font-bold uppercase text-right">
                  Cart totals
                </h2>
                <div>
                  <p className="flex items-center justify-between border-[1px] py-1.5 px-4 text-lg font-medium">
                    Subtotal{" "}
                    <PriceFormet
                      amount={products?.reduce(
                        (acc, item) => acc + item.price * item.quantity,
                        0
                      )}
                      className="font-semibold tracking-wide"
                    />
                  </p>
                  <p className="flex items-center justify-between border-[1px] py-1.5 px-4 text-lg font-medium border-b-0 border-t-0 ">
                    Discount{" "}
                    <PriceFormet className="font-semibold tracking-wide" />
                  </p>
                  <p className="flex items-center justify-between border-[1px] py-1.5 px-4 text-lg font-medium ">
                    Total{" "}
                    <PriceFormet className="font-bold tracking-wide text-xl" />
                  </p>
                </div>
                <div>
                  <button onClick={() => toast.success("Checkout successful")} className="w-full rounded-md py-2.5 bg-primary/80 text-white hover:bg-primary hoverEffect">
                    Proceed to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="py-10">
          <img src={emptyCart} alt="emptyCart" className="max-w-80" />
          <div className="flex flex-col gap-2.5 mt-5">
            <h2 className="text-xl font-bold uppercase">Your cart is empty</h2>
            <p className="text-sm max-w-96 text-lightText">
              Add items to it now in the homepage or on the product page
            </p>
            <Link
              to="/shop"
              className="bg-black/80 text-white py-2 px-6 w-48 text-center rounded-md hover:bg-primary hoverEffect"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Cart;
