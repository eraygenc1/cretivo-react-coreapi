import React, { useEffect } from 'react';

function Slider() {
 useEffect(() => {
  const title = document.querySelector('.movement-png-1');
  const title2 = document.querySelector('.movement-png-2');

  if (title) title.style.transition = 'transform 0.2s ease-out';
  if (title2) title2.style.transition = 'transform 0.2s ease-out';

  let requestId;

  const handleMouseMove = (e) => {
    if (title && title2) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const windowWidth = window.innerWidth / 2;
      const windowHeight = window.innerHeight / 2;

      const offsetX = (mouseX - windowWidth) / windowWidth;
      const offsetY = (mouseY - windowHeight) / windowHeight;

      const maxMovement = 15;

      const translateX = maxMovement * offsetX;
      const translateY = maxMovement * offsetY;

      // Animasyonu optimize et
      cancelAnimationFrame(requestId);
      requestId = requestAnimationFrame(() => {
        title.style.transform = `translate(${translateX}px, ${translateY}px)`;
        title2.style.transform = `translate(${translateX * 0.6}px, ${translateY * 0.6}px)`; 
      });
    }
  };

  document.addEventListener('mousemove', handleMouseMove);

  return () => {
    document.removeEventListener('mousemove', handleMouseMove);
    cancelAnimationFrame(requestId);
  };
}, []);


  return (
    <div className="area1">
      <div className="swiper">
        <div className="swiper-wrapper">
          {/* Slide 1 */}
          <div className="swiper-slide">
            <div className="row">
              <div className="col-sm-6 text-start">
                <h5 className="mt-4 fw-8">
                  <span>Cretivo</span> <br />Dijital Medya Ajansı
                </h5>
                <p>
                  Cretivo Dijital Medya Ajansı olarak, etkili web tasarımları,
                  yaratıcı grafikler ve güçlü sosyal medya yönetimi ile
                  markanızı dijital dünyada parlatıyoruz. Özel yazılımlar ve
                  modern QR menü sistemleri ile işinizi bir adım öteye taşıyın.
                </p>
                <ul>
                  <li><a href="#">Web Tasarım & Yazılımları</a></li>
                  <li><a href="#">Grafik Tasarımı</a></li>
                  <li><a href="#">Sosyal Medya Yönetimi</a></li>
                  <li><a href="#">QR Menu Sistemleri</a></li>
                  <li><a href="#">Ürün Video & Fotoğraf Çekimleri</a></li>
                </ul>
              </div>
              <div className="col-sm-3">
                <img
                  className="movement-png-1"
                  src="/assets/img/Networking.png"
                  alt="Networking"
                  style={{ width: "500px" }}
                />
              </div>
              <div className="col-sm-3">
                <img
                  className="movement-png-2"
                  src="./assets/img/Startup Rocket.png"
                  alt="Startup Rocket"
                  style={{ width: "250px" }}
                />
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="swiper-slide">
            <div className="row">
              <div className="col-sm-6 text-start">
                <h5 className="mt-4 fw-8">
                  <span>Cretivo</span> <br />Dijital Medya Ajansı
                </h5>
                <p>...</p>
                <ul>
                  <li>Web Tasarım & Yazılımları</li>
                  <li>Grafik Tasarımı</li>
                  <li>Sosyal Medya Yönetimi</li>
                  <li>QR Menu Sistemleri</li>
                  <li>Ürün Video & Fotoğraf Çekimleri</li>
                </ul>
              </div>
              <div className="col-sm-6">
                <img
                  className="movement-png-1"
                  src="/assets/img/1.png"
                  alt="Slide 2"
                  style={{ width: "200px" }}
                />
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="swiper-slide">
            <div className="row">
              <div className="col-sm-6 text-start">
                <h5 className="mt-4 fw-8">
                  <span>Cretivo</span> <br />Dijital Medya Ajansı
                </h5>
                <p>...</p>
                <ul>
                  <li>Web Tasarım & Yazılımları</li>
                  <li>Grafik Tasarımı</li>
                  <li>Sosyal Medya Yönetimi</li>
                  <li>QR Menu Sistemleri</li>
                  <li>Ürün Video & Fotoğraf Çekimleri</li>
                </ul>
              </div>
              <div className="col-sm-6">
                <img
                  className="movement-png-1"
                  src="/assets/img/1.png"
                  alt="Slide 3"
                  style={{ width: "200px" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Swiper Controls */}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}

export default Slider;
