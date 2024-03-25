import { Link, useNavigate } from "react-router-dom";
import { useListings } from "../hooks/listings";

export const Recentlistings = () => {
  const navigate = useNavigate();
  const { recent } = useListings();
  return (
    <div className='py-4'>
      <div></div>
      <div className='flex flex-col my-4 justify-center items-center md:grid md:grid-cols-3 md:justify-items-center'>
        {recent.map((item) => {
          return (
            <div
              className='W-fit roundeds m-3 md:m-3 relative'
              onClick={() => {
                navigate(`/selected/${item.title}/${item.id}`);
              }}
            >
              <div className='text-xs z-10 font-bold text-green-600 bg-green-100 absolute rounded text-center  top-0 m-1 left-0 w-fit p-1'>
                Available
              </div>
              <div className='overflow-y-hidden overflow-x-hidden  rounded-t'>
                <img
                  src={item.img}
                  className='w-[300px] md:w-[400px] rounded-t   h-[230px] hover:scale-125 hover:transition-all hover:easy-in-out hover:duration-1000 cursor-pointer'
                />
              </div>
              <div className='bg-white  shadow-md md:w-[400px] space-y-2  p-4  w-[300px] rounded-b'>
                <div className='text-blue-600 text-3xl '>${item.price}</div>
                <div className='text-2xl '>{item.location}</div>
                <div className='text-gray-400 text-sm '>demmo real estates</div>
                <div className='flex flex-row justify-between items-center'>
                  <span>
                    <b>SZ: </b>1194sql
                  </span>
                  <span>
                    <b>BD:</b> 2br
                  </span>
                  <span>
                    <b>BathR:</b> 2 br
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Link
        to={"/listings"}
        className='bg-blue-600  m-4 text-white font-bold w-fit p-3 rounded-l-full rounded-r-full '
      >
        see more
      </Link>
    </div>
  );
};
