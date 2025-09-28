document.addEventListener('DOMContentLoaded', function () {
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

  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
          hamburger.classList.toggle('active');
          navMenu.classList.toggle('active');
      });
  }

 

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
});
