import React, { useState } from "react";
import { logo } from "../assets/images/index";
import Container from "./Container";
import SearchInput from "./SearchInput";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { headerNavigation } from "../constants";
import { Link, NavLink } from "react-router-dom";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Title from "./Title";
import { IoCloseOutline } from "react-icons/io5";
import SocialLinks from "./SocialLinks";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <Link
            to={"/cart"}
            className="text-2xl hover:text-primary hoverEffect relative group"
          >
            <FaShoppingCart />
            <span className="absolute -top-1 -right-2 text-white bg-lightText group-hover:bg-primary  hoverEffect text-xs w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </Link>
          <Link
            to={"/signin"}
            className="text-xl hover:text-primary hoverEffect"
          >
            <FaUser />
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="text-2xl text-lightText hover:text-primary md:hidden hoverEffect"
        >
          <HiOutlineMenuAlt1 />
        </button>
        {/* Dialog button */}
        <Dialog
          open={isOpen}
          className="relative z-50 md:hidden text-white/80"
          onClose={() => setIsOpen(false)}
        >
          <div className="fixed inset-0 z-10 w-screen items-center justify-center p-4 bg-black/90">
            <DialogPanel
              transition
              className="w-[94%] space-y-4 bg-primary p-6 border border-lightText rounded-md absolute top-10 "
            >
              <div className="flex items-center justify-between gap-5">
                <Title className="text-xl text-white">Navigation Menu</Title>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/40 text-2xl hover:text-red-600 duration-300 border border-white/20 rounded-sm
                 hover:border-white/40"
                >
                  <IoCloseOutline />
                </button>
              </div>
              <div className="flex flex-col gap-5 pt-5">
                {headerNavigation?.map((item) => (
                  <NavLink
                    onClick={() => setIsOpen(false)}
                    key={item?.title}
                    to={item?.link}
                    className="hover:text-white duration-300 relative group flex items-center gap-2"
                  >
                    <span className="w-2.5 h-2.5 rounded-full border border-white/80 inline-flex group-hover:border-white duration-300" />
                    {item?.title}
                    <span className="absolute w-full h-[1px] bg-white/20 left-0 -bottom-1 group-hover:bg-white duration-300" />
                  </NavLink>
                ))}
                <NavLink
                  to={"/signin"}
                  className="hover:text-white duration-300 relative group flex items-center gap-2"
                >
                  <span className="w-2.5 h-2.5 rounded-full border border-white/80 inline-flex group-hover:border-white duration-300" />
                  Signin
                  <span className="absolute w-full h-[1px] bg-white/20 left-0 -bottom-1 group-hover:bg-white duration-300" />
                </NavLink>
              </div>
              <div className="pt-3">
                <SocialLinks />
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </Container>
    </div>
  );
};

export default Header;
