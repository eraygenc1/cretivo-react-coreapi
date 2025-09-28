import { useEffect } from 'react';
import Navbar from "./Navbar";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'aos/dist/aos.css';
import { Routes, Route,Router } from 'react-router-dom';
// Swiper importları
import Swiper from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Slider from './Slider';
import Anasayfa from "./pages/Anasayfa";
import Hakkimizda from "./pages/Hakkimizda";

function App() {

  useEffect(() => {
    // Swiper 1
    const swiper = new Swiper(".swiper", {
      slidesPerView: 1,
      spaceBetween: 200,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true,
    });

    // Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    const toggleMenu = () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    };

    if (hamburger && navMenu) {
      hamburger.addEventListener('click', toggleMenu);
    }

    // Swiper 2 (Referanslar)
    const swiper2 = new Swiper(".ref-swiper-container", {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: ".ref-swiper-button-next",
        prevEl: ".ref-swiper-button-prev",
      },
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });

  })

  return (
    
    <div>
      
      <Routes>
      <Route path="/" element={<Anasayfa />} />
      <Route path="/Hakkimizda" element={<Hakkimizda />} />
      
    </Routes>
    </div>
  );
}

export default App;
