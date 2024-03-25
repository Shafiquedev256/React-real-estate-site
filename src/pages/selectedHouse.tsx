import { useParams } from "react-router-dom";
import { Footer } from "../components/footer";
import { Navbar } from "../components/topNavbar";
import { House_highlights } from "../components/houseHighlights";
import { Post_auth } from "../components/postAuth";
import { About_house } from "../components/aboutHouse";
import { House_location } from "../components/houseLocation";
import { HouseImages } from "../components/houseImages";
import { useListings } from "../hooks/listings";

const Selected_house_page = () => {
  const { house, id } = useParams();
  const { recent } = useListings();
  const item = recent.filter((hous) => hous.title === house);

  return (
    <>
      <div>
        <div className='bg-black  '>
          <Navbar />
        </div>
        <div className='bg-gray-100 bg-opacity-75 p-3'>{`Home/listings/${house}/${id}`}</div>
      </div>

      <HouseImages thumbnail={item[0].img} />

      <div className='containor px-3 space-y-3'>
        <div className='text-2xl md:text-3xl space-y-4 py-10  '>
          <div className='text-blue-700'>$200,000</div>
          <div>{item[0].location}</div>
        </div>

        <div className='flex flex-col md:flex-row justify-between'>
          <House_highlights />
          <Post_auth />
        </div>
        <About_house />
        <House_location />
      </div>

      <Footer />
    </>
  );
};

export default Selected_house_page;
