import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import Cities_page from "./pages/cityPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/city/:city' element={<Cities_page />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
