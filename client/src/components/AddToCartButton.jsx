import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { toast } from 'react-hot-toast'

const AddToCartButton = ({ item  , className}) => {
    const [isAdded, setIsAdded] = useState(false);

    const handleClick = () => {
        setIsAdded((prevAdded) => {
            const message = prevAdded
              ? `${item.name} removed from cart`
              : `${item.name} added to cart`;
      
            toast.success(message); // Display toast with item name
            return !prevAdded;
          });
    };
  return (
     <button
      onClick={handleClick}
      className={twMerge(
        "px-6 py-2 rounded-md text-white font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none",
        isAdded ? "bg-green-500 shadow-lg" : "bg-black shadow-xl hover:bg-black",
        className
      )}
    >
      <span className="flex items-center justify-center">
        <i className={`mr-2 ${isAdded ? "text-white" : "text-gray-200"}`}>
          {isAdded ? "✔️" : "🛒"}
        </i>
        {isAdded ? "Added" : "Add to Cart"}
      </span>
    </button>
  )
}

export default AddToCartButton