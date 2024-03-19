import { Footer } from "../components/footer";
import { Recentlistings } from "../components/recentListings";
import { SearchBar } from "../components/search";
import { Navbar } from "../components/topNavbar";

const Listins_page = () => {
  return (
    <>
      <div className='bg-gray-100 bg-opacity-50 py-4 px-2 space-y-3'>
        <div className='bg-black'>
          <Navbar />
        </div>
        <div className='bg-white w-[90%] md:w-[50%] flex flex-row p-1 justify-between  items-center rounded'>
          <SearchBar />
        </div>
      </div>

      <Recentlistings />
      <Footer />
    </>
  );
};
export default Listins_page;
