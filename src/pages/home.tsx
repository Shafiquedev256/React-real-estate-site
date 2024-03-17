import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { PopularCities } from "../components/popularCities";
import { Agent } from "../components/agentsCard";
import { Recentlistings } from "../components/recentListings";
const HomePage = () => {
  return (
    <>
      <div className='h-max'>
        <Header />
        <div className='my-3'>
          <Recentlistings />
        </div>
        <PopularCities />
        <Agent />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
