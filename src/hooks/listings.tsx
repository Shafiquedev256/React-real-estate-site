import houseim1 from "../assets/homeImg.jpeg";
import houseim2 from "../assets/house2.webp";
import houseim3 from "../assets/house3.webp";
import houseim4 from "../assets/house4.webp";
import houseim5 from "../assets/house5.webp";
import houseim6 from "../assets/house6.webp";

type List = {
  location: string;
  img: string;
  bdr: number;
  size: string;
  bathr: number;
  price: string;
  id: number;
  title: string;
}[];

const list: List = [
  {
    location: "1660 GULF BLVD #708, CLEARWATER",
    title: "1660 GULF BLVD",
    img: houseim1,
    bdr: 2,
    size: "123sqft",
    bathr: 2,
    price: "1,150,000",
    id: 1,
  },
  {
    location: "2400 WINDING CREEK BLVD #14-204,",
    title: "2400 WINDING CREEK",
    img: houseim2,
    bdr: 2,
    size: "123sqft",
    bathr: 2,
    price: "229,900",
    id: 2,
  },
  {
    location: "3256 BRAEMAR TER, PALM HARBOR,",
    title: "3256 BRAEMAR TER",
    img: houseim3,
    bdr: 2,
    size: "123sqft",
    bathr: 2,
    price: "459,900",
    id: 3,
  },
  {
    location: "2232 PICKARD LN, NORTH PORT,",
    title: "2232 PICKARD",
    img: houseim4,
    bdr: 2,
    size: "123sqft",
    bathr: 2,
    price: "415,000",
    id: 4,
  },
  {
    location: "6909 N BOULEVARD, TAMPA, Florida",
    title: "6909 N BOULEVARD",
    img: houseim5,
    bdr: 2,
    size: "123sqft",
    bathr: 2,
    price: "525,000",
    id: 5,
  },
  {
    location: "5295 BRAHMA AVE, ORLANDO, Florida",
    title: "5295 BRAHMA AVE",
    img: houseim6,
    bdr: 2,
    size: "123sqft",
    bathr: 2,
    price: "285,000",
    id: 6,
  },
];

export const useListings = () => {
  const recent = list.map((item, index: number) => {
    if (index == 4) {
      return list[index];
    }
    return item;
  });
  return { list, recent };
};
