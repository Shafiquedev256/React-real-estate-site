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
};

const demoCities: Props[] = [
  { city: "Miami", src: Miamiimg },
  { city: "Miami Beach", src: Miamibeachimg },
  { city: "Orlando", src: orlandalimg },
  { city: "Tempa", src: tempaimg },
  { city: "Fort Myers", src: Myersimg },
  { city: "Fort Lauderdale", src: Laudimg },
  { city: "Sarasota", src: saraimg },
  { city: "St Petersburg", src: peteimg },
];

const CityCard = ({ city, src }: Props) => {
  return (
    <>
      <Link
        to={`city/${city}`}
        className='rounded-2xl relative w-[200px] h-[200px] md:w-[250px] md:h-[230px] m-2'
      >
        <img src={src} className='w-[100%] h-[100%] absolute rounded-2xl' />
        <div className='absolute w-[100%] h-[100%] flex items-center justify-center text-white z-10 bg-black bg-opacity-25 rounded-2xl hover:bg-blue-500 hover:bg-opacity-50 hover:font-bol'>
          {" "}
          <span>{city}</span>
        </div>
      </Link>
    </>
  );
};

export const PopularCities = () => {
  return (
    <>
      <div className='font-bold m-3 '>Available cities</div>
      <div className='md:flex md:items-center md:justify-center'>
        <div className='grid grid-cols-2 justify-items-center md:grid-cols-3 items-center md:w-[90%]'>
          {demoCities.map((item) => {
            return <CityCard city={item.city} src={item.src} />;
          })}
        </div>
      </div>
    </>
  );
};
