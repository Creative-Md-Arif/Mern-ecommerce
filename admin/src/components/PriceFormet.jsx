import React from 'react'
import { twMerge } from 'tailwind-merge'

const PriceFormet = ({amount , className}) => {
    const formattedAmount = new Number(amount).toLocaleString("EN", {
        style: "currency",
        currency: "BDT", // This is just for formatting
        minimumFractionDigits: 2,
      });
      
  
  return (
    <span className={twMerge("text-base font-medium", className)}>{formattedAmount}</span>
  )
}

export default PriceFormet