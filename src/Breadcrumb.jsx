import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useLocation, Link } from "react-router-dom";

export default function Breadcrumb() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Türkçe sayfa adları için mapping
  const nameMap = {
    hakkimizda: "Hakkımızda",
    iletisim: "İletişim",
    hizmetler: "Hizmetler",
    proje: "Projeler",
  };

  return (
    <div className="area1 yesilcizgi" style={{ position: "relative", height: "300px" }}>
      <div className="breadcrumb d-flex justify-content-center align-items-center flex-column" style={{ position: "relative", zIndex: 1 }}>
        
        {/* Particles */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            particles: {
              number: { value: 80, density: { enable: true, area: 800 } },
              color: { value: "#1fab89" },
              shape: { type: "circle" },
              opacity: { value: 0.5 },
              size: {
                value: 127.56,
                random: true,
                anim: { enable: true, speed: 40, size_min: 0.1, sync: false },
              },
              move: {
                enable: true,
                speed: 6,
                random: true,
                out_mode: "out",
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
              },
              modes: {
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
              },
            },
            retina_detect: true,
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        />

        {/* Breadcrumb Yolu */}
        <div className="text-white position-relative mt-5">
          <Link to="/" className="text-white text-decoration-none">
            Anasayfa
          </Link>

          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            const label = nameMap[value] || value.charAt(0).toUpperCase() + value.slice(1);

            return (
              <span key={to}>
                {" / "}
                {isLast ? (
                  <span className="text-light">{label}</span>
                ) : (
                  <Link to={to} className="text-white text-decoration-none">
                    {label}
                  </Link>
                )}
              </span>
            );
          })}
        </div>

        {/* Başlık */}
        <h1 className="text-center text-white mt-4">
          {pathnames.length > 0
            ? nameMap[pathnames[pathnames.length - 1]] ||
              pathnames[pathnames.length - 1].charAt(0).toUpperCase() +
                pathnames[pathnames.length - 1].slice(1)
            : "Anasayfa"}
        </h1>
      </div>
    </div>
  );
}
