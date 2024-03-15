import { useState } from "react";
import { Navbar } from "./topNavbar";

export const Header = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className=" bg-[url('/src/assets/pexels-on-shot-3663530.jpg')] bg-center mb-2 bg-cover w-screen h-[30rem] md:h-[50rem] bg-no-repeat overflow-y-hidden">
        <Navbar />
        <div className='w-[100%] h-[100%] bg-black bg-opacity-60 flex justify-center items-center flex-col'>
          <div className='text-white text-center my-4'>
            <h1 className='md:text-4xl my-3 font-sans text-2xl font-bold'>
              Enter the Future of Real Estate Browsing
            </h1>
            <h2 className='md:text-2xl mb-2'>
              Discover Seamless Performance with Our Advanced Technology
            </h2>
          </div>

          <div className='bg-white w-[90%] md:w-[50%] flex flex-row p-1 justify-between  items-center rounded'>
            <input
              type='text'
              className='w-[95%] p-2 outline-0 ml-3'
              placeholder='Search for , location, cities or countries'
              value={search}
              onChange={(e: any) => {
                setSearch(e.target.value);
              }}
            />
            <button className='w-fit h-fit p-2 text-center bg-black rounded text-white'>
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
