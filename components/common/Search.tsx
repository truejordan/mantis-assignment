"use client";
import React, { useState, ChangeEvent } from "react";
import { NextPage } from "next";
import Icons from "./Icons";

interface Props {
  onSearch?: (query: string) => void;
  placeholder?: string;
}

const SearchBar: NextPage<Props> = ({ placeholder = "Search", onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (onSearch) {
      onSearch(value);
    }
  };

  const clearSearch = () => {
    setQuery("");
    if (onSearch) {
      onSearch("");
    }
  };


  return (
    <div className="flex relative items-center w-full rounded-2xl bg-white/2 shadow hover:bg-white/4 px-4">
      <div className="absolute text-white/dark">
        <Icons icon="search" height={20} width={20} />
      </div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="w-full py-3 pl-7 outline-none text-white bg-transparent placeholder:text-white/dark caret-green-mantis "
      />
      {query && (
        <button onClick={clearSearch} className=" text-white/dark">
          <Icons icon="x-close" height={18} width={18} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
