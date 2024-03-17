import { useListings } from "../hooks/listings";

export const Recentlistings = () => {
  const { list } = useListings();
  return (
    <>
      <div className='flex flex-col justify-center items-center md:grid md:grid-cols-2 md:justify-items-center'>
        {list.map((item) => {
          return (
            <div className='W-fit roundeds m-3 md:m-3 relative'>
              <div className='text-xs z-10 font-bold text-green-600 bg-green-100 absolute rounded text-center  top-0 m-1 left-0 w-fit p-1'>
                Available
              </div>
              <img
                src={item.img}
                className='w-[300px] md:w-[444px] rounded-t   h-[230px]'
              />

              <div className='bg-white  shadow-md md:w-[444px] space-y-2  p-4  w-[300px] rounded-b'>
                <div className='text-blue-600 text-3xl '>$20000</div>
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
    </>
  );
};
