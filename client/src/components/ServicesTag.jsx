import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";
import Container from "./Container";
const services = [
  {
    title: "Free Delivery",
    subtitle: "Free shipping on all orders",
    icon: <TbTruckDelivery />,
  },
  {
    title: "Returns",
    subtitle: "Back guarantee under 7 days",
    icon: <HiOutlineCurrencyDollar />,
  },
  {
    title: "Support 24/7",
    subtitle: "Support 24 hours a day",
    icon: <BiSupport />,
  },
  {
    title: "Payments",
    subtitle: "100% payment secure",
    icon: <MdOutlinePayment />,
  },
];

const ServicesTag = () => {
  return (
    <div className="bg-[#f4f4f4]">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 place-items-center md:place-items-start">
        {services?.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="text-5xl text-blue-600 ">{item?.icon}</span>
            <div>
              <h3 className="text-base uppercase font-bold ">{item?.title}</h3>
              <p className="text-sm font-medium max-w-[160px] tracking-wide">
                {item?.subtitle}
              </p>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default ServicesTag;
