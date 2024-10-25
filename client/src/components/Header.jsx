import React from "react";
import { logo } from "../assets/images/index";
import Container from "./Container";
import SearchInput from "./SearchInput";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { headerNavigation } from "../constants";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="border-b-[1px] border-slate-300 sticky top-0 z-50 bg-white">
      <Container className="py-7 flex justify-between items-center gap-x-3 md:gap-x-7">
        <Link to={"/"}>
        <img src={logo} alt="logo" className="w-20" />
        </Link>
        <SearchInput />
        <div className=" hidden md:inline-flex items-center gap-5 lg:gap-7 text-sm uppercase font-medium text-lightText">
          {headerNavigation?.map((item) => (
            <NavLink
              key={item?.title}
              to={item?.link}
              className="hover:text-primary hoverEffect cursor-pointer relative group overflow-hidden"
            >
              {item?.title}
              <span className="w-full h-[1px] absolute bottom-0 left-0 bg-primary  -translate-x-[110%] group-hover:translate-x-0 hoverEffect transition-all duration-300"></span>
            </NavLink>
          ))}
          <Link to={"/cart"} className="text-2xl hover:text-primary hoverEffect relative group">
            <FaShoppingCart />
            <span className="absolute -top-1 -right-2 text-white bg-lightText group-hover:bg-primary  hoverEffect text-xs w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </Link>
          <Link to={"/signin"} className="text-xl hover:text-primary hoverEffect">
            <FaUser />
          </Link>
        </div>
        <button className="text-2xl text-lightText hover:text-primary md:hidden hoverEffect">
          <HiOutlineMenuAlt1 />
        </button>
      </Container>
    </div>
  );
};

export default Header;
