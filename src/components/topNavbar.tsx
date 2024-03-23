import { useState } from "react";
import { Link } from "react-router-dom";
import menuicone from "../assets/menu-svgrepo-com.svg";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className=' flex flex-row justify-between text-white items-center font-bold p-3 w-[100%]'>
        <Link to='/' className='font-bold text-2xl'>
          Real Estate
        </Link>

        <div className=' w-2/5'>
          <div
            className={`${
              isOpen ? "translate-x-0 " : "translate-y-[-100%] md:translate-y-0"
            } ease-in-out duration-300 flex md:flex-row md:justify-evenly items-center md:h-fit h-[15rem] md:rounded-0 rounded-b-md space-y-4 md:space-y-0 justify-center md:text-sm fixed md:static top-0 w-screen left-0 md:w-[100%] flex-col bg-white md:bg-opacity-0 bg-white text-black md:text-white `}
          >
            <span
              className='fixed top-0 z-20 m-[0.5rem] right-0 md:hidden'
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Close
            </span>
            <Link to='/listings' className='hover:text-gray-400 '>
              Listings
            </Link>
            <span className='hover:text-gray-400 '>Locations</span>
            <span className='hover:text-gray-400 '>Account</span>
          </div>
        </div>

        <div className='md:hidden'>
          <img
            src={menuicone}
            onClick={() => {
              setIsOpen(true);
            }}
          />
        </div>
      </div>
    </>
  );
};
