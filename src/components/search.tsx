import { useState } from "react";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <input
        type='text'
        className='w-[95%]  p-2 outline-0 ml-3'
        placeholder='Search for , location, cities or countries'
        value={search}
        onChange={(e: any) => {
          setSearch(e.target.value);
        }}
      />
      <button className='w-fit h-fit p-2 text-center bg-black rounded text-white'>
        Search
      </button>
    </>
  );
};
