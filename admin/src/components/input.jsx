import React from "react";
import { cn } from "./ui/cn";

export const Label = () => {};

const Input = ({ type, placeholder, name, id, value, onChange, classname , disabled }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={cn(
        " border px-4 py-1 border-gray-400 rounded-md max-w-lg",
        classname
      )}
    />
  );
};

export default Input;
