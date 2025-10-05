import { Routes, Route } from "react-router-dom";
import Anasayfa from "./pages/Anasayfa";
import Hakkimizda from "./pages/Hakkimizda";
import Iletisim from "./pages/Iletisim";
import Hizmetlerimiz from "./pages/Hizmetlerimiz";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Anasayfa />} />
      <Route path="/hakkimizda" element={<Hakkimizda />} />
      <Route path="/iletisim" element={<Iletisim />} />
      <Route path="/hizmetlerimiz" element={<Hizmetlerimiz />} />
    </Routes>
  );
}

export default App;
