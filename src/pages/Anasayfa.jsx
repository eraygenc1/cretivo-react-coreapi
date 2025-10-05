import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Slider from "../Slider";
import Area3 from "../Area3";
import Services from "../Services";
import Swiper from "swiper";
import Footer from "../Footer";
function Anasayfa() {
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
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    const toggleMenu = () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    };

    if (hamburger && navMenu) {
      hamburger.addEventListener("click", toggleMenu);
    }

    return () => {
      if (hamburger) hamburger.removeEventListener("click", toggleMenu);
    };
  }, []); // sayfa her yüklendiğinde bir kere çalışır

  return (
    <>
      <Navbar />
      <Slider />
      <Area3 />
      <Services />
      <Footer/>
    </>
  );
}

export default Anasayfa;
