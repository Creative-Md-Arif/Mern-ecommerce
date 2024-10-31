import React from "react";
import saleImgOne from "../assets/images/sale/saleImgOne.jpg";
import { Link } from "react-router-dom";
import { saleImgThree, saleImgTwo } from "../assets/images";
const Sale = () => {
  return (
    <div className="w-full h-auto md:h-[550px] flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="w-full md:w-1/2 h-[250px] md:h-full border border-gray-300 rounded-md overflow-hidden relative group">
        <img
          src={saleImgOne}
          alt="saleImgOne"
          className="w-full lg:h-screen object-cover group-hover:scale-110 duration-500 ease-in-out"
        />
        <div className="absolute w-full h-full top-0 left-0 bg-black/40 text-white flex items-center md:justify-center">
          <div className="flex flex-col md:items-center gap-2 p-10">
            <p className="text-sm md:text-lg font-medium text-white">
              10% sales ongoing on phone
            </p>
            <p className="text-sm md:text-xl font-medium">
              Offer on limited time
            </p>
            <Link
              to="/shop"
              className="bg-white/70 text-black  px-8 py-2.5 rounded-md hover:bg-white duration-300 font-medium"
            >
              Shop now
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-full flex flex-col justify-between gap-10 md:gap-0">
        <div className="w-full h-[250px] md:h-[46%] border border-gray-300 rounded-md overflow-hidden relative group">
          <img
            src={saleImgTwo}
            alt="saleImgTwo"
            className="w-full lg:h-screen object-cover group-hover:scale-110 duration-500 ease-in-out"
          />
          <div className="absolute w-full h-full top-0 left-0 bg-black/40 text-white flex items-center">
            <div className="flex flex-col items-start p-10 gap-2">
              <p className="text-sm md:text-lg font-medium text-white">
                10% sales ongoing on headphones
              </p>
              <p className="text-sm md:text-xl font-medium">
                Offer on limited time
              </p>
              <Link
                to="/shop"
                className="bg-white/70 text-black  px-8 py-2.5 rounded-md hover:bg-white duration-300 font-medium"
              >
                Shop now
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-[250px] md:h-[46%] border border-gray-300 rounded-md overflow-hidden relative group">
          <img
            src={saleImgThree}
            alt="saleImgThree"
            className="w-full lg:h-screen object-cover group-hover:scale-110 duration-500 ease-in-out"
          />
          <div className="absolute w-full h-full top-0 left-0 bg-black/40 text-white flex items-center">
            <div className="flex flex-col items-start p-10 gap-2">
              <p className="text-sm md:text-lg font-medium text-white">
                10% sales ongoing on headphones
              </p>
              <p className="text-sm md:text-xl font-medium">
                Offer on limited time
              </p>
              <Link
                to="/shop"
                className="bg-white/70 text-black  px-8 py-2.5 rounded-md hover:bg-white duration-300 font-medium"
              >
                Shop now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
