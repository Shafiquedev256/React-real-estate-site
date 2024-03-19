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
  price: number;
  id: number;
}[];

const list: List = [
  {
    location: "D467 DEWAY DR",
    img: houseim1,
    bdr: 2,
    size: "123sqft",
    bathr: 2,
    price: 1000000,
    id: 1,
  },
  {
    location: "D467 DEWAY DR",
    img: houseim2,
    bdr: 2,
    size: "123sqft",
    bathr: 2,
    price: 1100000,
    id: 2,
  },
  {
    location: "D467 DEWAY DR",
    img: houseim3,
    bdr: 2,
    size: "123sqft",
    bathr: 2,
    price: 900000,
    id: 3,
  },
  {
    location: "D467 DEWAY DR",
    img: houseim4,
    bdr: 2,
    size: "123sqft",
    bathr: 2,
    price: 560000,
    id: 4,
  },
  {
    location: "D467 DEWAY DR",
    img: houseim5,
    bdr: 2,
    size: "123sqft",
    bathr: 2,
    price: 1567400,
    id: 5,
  },
  {
    location: "D467 DEWAY DR",
    img: houseim6,
    bdr: 2,
    size: "123sqft",
    bathr: 2,
    price: 80000,
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
