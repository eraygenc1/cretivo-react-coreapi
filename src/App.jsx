import { Routes, Route, Link } from "react-router-dom";
import Anasayfa from "./pages/Anasayfa";
import Hakkimizda from "./pages/Hakkimizda";
import Iletisim from "./pages/Iletisim";
import Hizmetlerimiz from "./pages/Hizmetlerimiz";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaWhatsapp } from "react-icons/fa";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Anasayfa />} />
        <Route path="/hakkimizda" element={<Hakkimizda />} />
        <Route path="/iletisim" element={<Iletisim />} />
        <Route path="/hizmetlerimiz" element={<Hizmetlerimiz />} />
      </Routes>

      {/* WhatsApp Butonu */}
      <div className="">
        <Link
          to="https://wa.me/905456653359?"
          target="_blank"
          rel="noreferrer"
        >
         <FaWhatsapp className="button-whatsapp"/>
        </Link>
      </div>
    </>
  );
}

export default App;
