import { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import img1 from "../assets/inside2.webp";
import img2 from "../assets/inside3.webp";
import img3 from "../assets/inside4.webp";
import img4 from "../assets/inside5.webp";
import img5 from "../assets/inside5.webp";
import img6 from "../assets/inside5.webp";

type Props = {
  thumbnail: string;
};

export const HouseImages = ({ thumbnail }: Props) => {
  const [open, setOpen] = useState(false);
  const images = [thumbnail, img1, img2, img3, img4, img5, img6];

  return (
    <>
      {open && (
        <div className='fixed flex justify-center  flex-col top-0 w-screen left-0 h-screen bg-white '>
          <div
            className='font-bold p-7 text-2xl w-screen text-center'
            onClick={() => setOpen(false)}
          >
            close
          </div>
          <Slide cssClass=''>
            {images.map((item) => (
              <div className='h-[15rem] md:h-[30rem]'>
                <div
                  className='bg-center bg-cover flex item-center justify-center h-[100%]'
                  style={{ backgroundImage: `url(${item})` }}
                ></div>
              </div>
            ))}
          </Slide>
        </div>
      )}

      <div
        className='flex  flex-row h-[20rem] p-1 space-x-2  md:h-[35rem] overflow-hidden '
        onClick={() => setOpen(true)}
      >
        <div className='flex flex-col space-y-2 justify-between'>
          <img src={thumbnail} className='h-2/5' />
          <img src={img4} className='h-3/5' />
        </div>
        <div className='flex flex-col space-y-2'>
          <img src={img2} className='h-2/4' />
          <img src={img3} className='h-2/4' />
        </div>
        <div className='flex flex-col space-y-2'>
          <img src={img5} className='h-1/4' />
          <img src={img6} className='h-2/4' />
          <img src={img1} className='h-1/4' />
        </div>
      </div>
    </>
  );
};
