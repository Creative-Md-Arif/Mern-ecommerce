import React from "react";
import Container from "./Container";
import { logo } from "../assets/images/index";

const Navbar = ( { token, setToken }) => {

  const handleToken = () => {
    setToken("")
    
  }
 

  return (
    <header className="border-b border-b-gray-600 w-full sticky top-0 left-0 z-50 bg-white">
      <Container className="py-6 flex justify-between items-center">
        <div>
          <img src={logo} alt="logo" className="w-24" />
          <p className="text-xs uppercase font-bold mt-1 tracking-wide text-blue-600">admin panel</p>
        </div>
       {
        token ? (
          <button onClick={handleToken} className="bg-black/80 text-white py-2 px-6 hover:bg-black divide-neutral-600 rounded-full">Logout</button>
        ) : (
          <button className="bg-black/80 text-white py-2 px-6 hover:bg-black divide-neutral-600 rounded-full">Login</button>
        )
       }
      </Container>
    </header>
  );
};

export default Navbar;
