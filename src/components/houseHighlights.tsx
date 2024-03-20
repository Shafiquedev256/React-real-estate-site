import homeIcone from "../assets/homeIcone.svg";
import statusIcone from "../assets/statusIcone.svg";
import dateIcone from "../assets/listdateIcone.svg";
import lotIcone from "../assets/lotsizeIcone.svg";
import listidIcone from "../assets/listidIcone.svg";

export const House_highlights = () => {
  return (
    <>
      <div className='md:w-4/5'>
        <div className='text-2xl my-3 font-bold'>Home Highlights</div>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-10 py-6'>
          <div className='flex flex-row space-x-2 items-center'>
            <img src={homeIcone} />
            <span className='text-[gray]'>Property Type</span>{" "}
            <span className='font-bold text-sm'>Land</span>
          </div>
          <div className='flex flex-row space-x-2 items-center'>
            <img src={statusIcone} />
            <span className='text-[gray]'>Status</span>{" "}
            <span className='font-bold text-sm'>Active</span>
          </div>
          <div className='flex flex-row space-x-2 items-center'>
            <img src={dateIcone} />
            <span className='text-[gray]'>Listing Date</span>{" "}
            <span className='font-bold text-sm'>2024-03-15</span>
          </div>
          <div className='flex flex-row space-x-2 items-center'>
            <img src={lotIcone} />
            <span className='text-[gray]'>Lot Size</span>{" "}
            <span className='font-bold text-sm'>60000 sqft</span>
          </div>
          <div className='flex flex-row space-x-2 items-center'>
            <img src={listidIcone} />
            <span className='text-[gray]'>List ID</span>{" "}
            <span className='font-bold text-sm'>O6187670</span>
          </div>
        </div>
      </div>
    </>
  );
};
