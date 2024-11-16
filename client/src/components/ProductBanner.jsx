import React from "react";
import { FaAngleDown } from "react-icons/fa6";

const ProductBanner = ({itemsPerPageFormBanner}) => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row justify-between items-cente">
        <div className="w-1/2">Sorting filter</div>
        <div className="flex items-center gap-2 text-black relative">
          <label htmlFor="itemPerPage">Show</label>
          <select
            name=""
            id=""
            className="w-16 md:w-20 border-[1px] border-gray-300 py-1 px-4 cursor-pointer text-primary text-base block appearance-none focus-within:outline-none focus-visible:border-primary"
            onChange={(e) => itemsPerPageFormBanner(e.target.value)}
          >
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="24">24</option>
            <option value="32">32</option>
          </select>
          <FaAngleDown className="absolute right-3 text-sm top-2.5"/>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
