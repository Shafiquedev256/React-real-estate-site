import img1 from "../assets/inside2.webp";
import img2 from "../assets/inside3.webp";
import img3 from "../assets/inside4.webp";
import img4 from "../assets/inside5.webp";
import img5 from "../assets/inside5.webp";
import img6 from "../assets/inside5.webp";

export const HouseImages = () => {
  return (
    <>
      <div className='flex  flex-row h-[20rem] p-1 space-x-2  md:h-[35rem] overflow-hidden '>
        <div className='flex flex-col space-y-2 justify-between'>
          <img src={img1} className='h-2/5' />
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
