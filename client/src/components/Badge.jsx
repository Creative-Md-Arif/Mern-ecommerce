import React from "react";
import { twMerge } from "tailwind-merge";

const Badge = ({ title, className }) => {
  return (
    <button
      className={twMerge(
        "bg-primary/80 text-white px-4 py-1 font-semibold hover:bg-black hoverEffect text-xs rounded-md"
      )}
    >
      {title}
    </button>
  );
};

export default Badge;
