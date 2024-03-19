import { useParams } from "react-router-dom";
import { Footer } from "../components/footer";
import { Navbar } from "../components/topNavbar";
import homeIcone from "../assets/homeIcone.svg";
import statusIcone from "../assets/statusIcone.svg";
import dateIcone from "../assets/listdateIcone.svg";
import lotIcone from "../assets/lotsizeIcone.svg";
import listidIcone from "../assets/listidIcone.svg";

const Selected_house_page = () => {
  const { house, id } = useParams();
  return (
    <>
      <div>
        <div className='bg-black  '>
          <Navbar />
        </div>
        <div className='bg-gray-100 bg-opacity-75 p-3'>{`Home/listings/${house}/${id}`}</div>
      </div>

      <div className='containor px-3 space-y-3'>
        <div className='text-2xl md:text-3xl space-y-4 py-10  '>
          <div className='text-blue-700'>$200,000</div>
          <div>4TH ST, ORLANDO, Florida 32820, ORLANDO, FL 32820</div>
        </div>
        <div>
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
      </div>

      <Footer />
    </>
  );
};

export default Selected_house_page;
