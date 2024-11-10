import React from 'react'
import PriceFormet from './PriceFormet'
import { twMerge } from 'tailwind-merge'


const PriceContainer = ({item , className}) => {
  return (
    <div className={twMerge("flex items-center gap-2", className)}>
     <PriceFormet amount={item?.price + (item?.discountedPercentage * item?.price)/ 100} className="line-through text-base font-normal text-lightText" />
     <PriceFormet amount={item?.price} className="font-semibold text-primary" />
    </div>
  )
}

export default PriceContainer
