import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

const SearchInput = () => {
  const [search, setSearch] = React.useState("");
  return (
    <div className="flex-1 h-10 relative">
      <input
        type="text"
        placeholder="Search your products here..."
        className="w-full h-full border border-lightText rounded-full outline-none pl-4 pr-10 text-primary focus-visible:border-blue-600"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      {search ? (
        <IoCloseOutline
          onClick={() => setSearch("")}
          className="absolute top-2.5 right-4 text-xl hover:text-red-600 cursor-pointer duration-300"
        />
      ) : (
        <CiSearch className="absolute top-2.5 right-4 text-xl" />
      )}
    </div>
  );
};

export default SearchInput;
