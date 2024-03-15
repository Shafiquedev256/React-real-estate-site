export const Footer = () => {
  return (
    <>
      <div className='bg-black text-white  bottom-0'>
        <div className='mx-4'>
          <div className='font-bold text-2xl py-2'>About site </div>
          <p className=' py-2 md:w-[70%]'>
            Explore our demo real estate platform, where we prioritize swift
            performance through the latest technology. Witness the fastest
            loading listings, ensuring a seamless experience for everyone.
            Welcome to the forefront of user-friendly and efficient real estate
            browsing.
          </p>
        </div>

        <div className='flex flex-col justify-evenly mx-4'>
          <div className='font-bold text-2xl py-2'>Our Services</div>
          <span>Home</span>
          <span>Properties</span>
          <span>Agents</span>
          <span>Blog</span>
        </div>

        <div className='mx-4'>
          <div className='font-bold text-2xl py-2'>Newaletter</div>
          <div className='flex flex-row items-center py-2'>
            <input
              type='text'
              className='outline-0 rounded w-4/5 p-2'
              placeholder='Enter email address '
            />
            <button className='bg-blue-600 text-center w-fit rounded p-2 mx-1'>
              Submit
            </button>
          </div>
          <p className='text-sm font-bold py-1'>
            Subscribe to our newsletter and get our newest updates right on your
            inbox.
          </p>
        </div>

        <div className='m-4 flex flex-col md:flex-row justify-between items-center md:w-[60%]'>
          <div className='flex flex-row items-center space-x-1 '>
            <img src='/src/assets/phone-svgrepo-com.svg' />
            <span>+256 760807822</span>
          </div>
          <div className='flex flex-row items-center space-x-1 '>
            <img src='/src/assets/mail-alt-3-svgrepo-com.svg' />
            <span>shafiquedev256@gmail.com</span>
          </div>
        </div>

        <div className='text-sm flex md:flex-row flex-col justify-evenly border-t-2 border-t-gray-400 py-4'>
          <span>About us |</span>
          <span>Help |</span>
          <span>Terms and Conditspan</span>
          <span>Copyright © 2022 Realtyna® Inc.</span>

          <span>Last updated on 22 February 2024</span>
        </div>
      </div>
    </>
  );
};
