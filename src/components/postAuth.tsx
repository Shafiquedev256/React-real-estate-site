import profilePic from "../assets/profile.webp";
import phoneIcone from "../assets/phonepri.svg";
import mailIcone from "../assets/mail.svg";
import QRicone from "../assets/qrcode.svg";

export const Post_auth = () => {
  return (
    <>
      <div className='md:w-1/5'>
        <div className='bg-gray-100 bg-opacity-60 p-4  rounded-2xl '>
          <div className='text-blue-600'> Listed by</div>
          <div>
            <span className='text-sm'>Maria Rocheleau</span> - WATERFORD REALTY,
            INC.
          </div>
        </div>

        <div className='bg-gray-100 bg-opacity-60 p-4  rounded-2xl my-2'>
          <div className='flex flex-col  items-center md:flex-row'>
            <img src={profilePic} />{" "}
            <div className='flex flex-col space-y-2 p-1 '>
              <span className='font-bold'>Noline</span>{" "}
              <span className='text-sm text-gray-500'>Real Estate</span>
            </div>
          </div>
          <div className='flex flex-row space-x-2'>
            <img src={phoneIcone} /> <span>+256 000303839</span>
          </div>
          <div className='flex flex-row space-x-2'>
            <img src={mailIcone} /> <span>examplev@example.com</span>
          </div>
        </div>

        <div className='flex fex-row bg-gray-100 bg-opacity-60 p-4  rounded-2xl my-2 space-x-2'>
          <img src={QRicone} />
          <div className='font-bold'>Click to View the QR code</div>
        </div>
      </div>
    </>
  );
};
