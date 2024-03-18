import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import Cities_page from "./pages/cityPage";
import Selected_house_page from "./pages/selectedHouse";
import Listins_page from "./pages/listings";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/city/:city' element={<Cities_page />} />
          <Route path='/selected/:house' element={<Selected_house_page />} />
          <Route path='/listings' element={<Listins_page />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
