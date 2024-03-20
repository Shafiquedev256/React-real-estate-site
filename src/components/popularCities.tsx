import Miamiimg from "/src/assets/Miami.jpeg";

import Miamibeachimg from "/src/assets/miamibeach.jpeg";

import orlandalimg from "/src/assets/Orlando.jpeg";

import tempaimg from "/src/assets/tempa.jpeg";

import Myersimg from "/src/assets/fortmyers.jpeg";

import Laudimg from "/src/assets/FortLauderdale.jpeg";

import saraimg from "/src/assets/sarasota.jpeg";

import peteimg from "/src/assets/Petersburg.jpeg";
import { Link } from "react-router-dom";

type Props = {
  city: string;
  src: string;
  height: string;
};

const demoCities: Props[] = [
  { city: "Miami", src: Miamiimg, height: "h-2/5" },
  { city: "Miami Beach", src: Miamibeachimg, height: "h-3/5" },
  { city: "Orlando", src: orlandalimg, height: "h-1/5" },
  { city: "Tempa", src: tempaimg, height: "h-2/5" },
  { city: "Fort Myers", src: Myersimg, height: "h-3/5" },
  { city: "Fort Lauderdale", src: Laudimg, height: "h-3/5" },
  { city: "Sarasota", src: saraimg, height: "h-2/5" },
  { city: "St Petersburg", src: peteimg, height: "h-1/5" },
];

const CityCard = ({ city, src, height }: Props) => {
  return (
    <>
      <div
        className={`rounded-2xl relative ${height} w-[120px] font-bold h-auto md:w-[250px]  m-2`}
      >
        <Link to={`city/${city}`} className=''>
          <img src={src} className='w-[100%]  absolute rounded-2xl h-[100%]' />
          <div className='absolute w-[100%] h-[100%] flex items-center justify-center text-white z-10 bg-black bg-opacity-25 rounded-2xl hover:bg-blue-500 hover:bg-opacity-50 hover:font-bol'>
            {" "}
            <span>{city}</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export const PopularCities = () => {
  return (
    <>
      <div className='font-bold m-3 '>Available cities</div>
      <div className='flex items-center justify-center'>
        <div className='flex  flex-row  md:flex-row h-[20rem] w-fit md:h-[35rem] overflow-hidden '>
          <div className='flex flex-col space-y-2'>
            <CityCard
              city={demoCities[0].city}
              src={demoCities[0].src}
              height={demoCities[0].height}
            />
            <CityCard
              city={demoCities[1].city}
              src={demoCities[1].src}
              height={demoCities[1].height}
            />
          </div>

          <div className='flex flex-col space-y-2 '>
            <CityCard
              city={demoCities[2].city}
              src={demoCities[2].src}
              height={demoCities[2].height}
            />
            <CityCard
              city={demoCities[3].city}
              src={demoCities[3].src}
              height={demoCities[3].height}
            />
            <CityCard
              city={demoCities[4].city}
              src={demoCities[4].src}
              height={demoCities[4].height}
            />
          </div>
          <div className='flex flex-col space-y-2 '>
            <CityCard
              city={demoCities[5].city}
              src={demoCities[5].src}
              height={demoCities[5].height}
            />
            <CityCard
              city={demoCities[6].city}
              src={demoCities[6].src}
              height={demoCities[6].height}
            />
            <CityCard
              city={demoCities[7].city}
              src={demoCities[7].src}
              height={demoCities[7].height}
            />
          </div>
        </div>
      </div>
    </>
  );
};
