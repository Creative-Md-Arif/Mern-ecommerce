import React from "react";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const linkData = [
  {
    icon: <FaFacebook />,
    href: "#",
  },
  {
    icon: <FaLinkedin />,
    href: "#",
  },
  {
    icon: <FaInstagram />,
    href: "#",
  },
  {
    icon: <IoLogoTwitter />,
    href: "#",
  },
];

const SocialLinks = () => {
  return (
    <div className="text-xl text-white/50 flex items-center gap-x-2">
      {linkData?.map((item, index) => (
        <a
          key={index}
          href={item?.href}
          target="_blank"
          className="border border-white/20 inline-flex p-2 rounded-full hover:text-white hover:border-white duration-300 cursor-pointer"
        >
          {item?.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
