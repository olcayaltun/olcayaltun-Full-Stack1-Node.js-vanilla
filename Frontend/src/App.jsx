import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePage from "./pages/createPage";
import Header from "./components/Header";
import DetailPage from "./pages/detayPages";
import MainPage from "./pages/mainPage";
const App = () => {
  return (
    <BrowserRouter>
      <div className=" bg-[#343434] pt-8   h-[2000px]">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/movie/:id" element={<DetailPage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
