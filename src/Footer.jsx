import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const navLinks = [
    { name: "Anasayfa", path: "/" },
    { name: "Hakkımızda", path: "/hakkimizda" },
    { name: "Hizmetlerimiz", path: "/hizmetlerimiz" },
    { name: "İletişim", path: "/iletisim" },
  ];

  return (
    <div className="footer">
      <div className="container mt-5">
        {/* Logo */}
        <div className="row footer-top">
          <Link to="/">
            <img
              style={{ width: "200px" }}
              src="/assets/img/cretivo-logo-white.png"
              alt="Cretivo Logo"
            />
          </Link>
        </div>

        {/* Footer İçeriği */}
        <div className="row mt-5">
          {/* Hızlı Linkler */}
          <div className="col-md-3">
            <h5>
              <FontAwesomeIcon icon={faCaretDown} className="mx-2" />
              Hızlı Linkler
            </h5>
            <ul>
              {navLinks.map((link, i) => (
                <li key={i} className="footerhizmetbaslik">
                  <Link to={link.path} className="text-decoration-none">
                    {link.name}
                    <div className="footerline"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Restoran Ürünleri */}
          <div className="col-md-3">
            <h5>
              <FontAwesomeIcon icon={faCaretDown} className="mx-2" />
              Restoran Ürünleri
            </h5>
            <ul>
              {navLinks.map((link, i) => (
                <li key={i} className="footerhizmetbaslik">
                  <Link to={link.path} className="text-decoration-none">
                    {link.name}
                    <div className="footerline"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kurumsal Kimlik */}
          <div className="col-md-3">
            <h5>
              <FontAwesomeIcon icon={faCaretDown} className="mx-2" />
              Kurumsal Kimlik
            </h5>
            <ul>
              {navLinks.map((link, i) => (
                <li key={i} className="footerhizmetbaslik">
                  <Link to={link.path} className="text-decoration-none">
                    {link.name}
                    <div className="footerline"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Adres */}
          <div className="col-md-3">
            <h5>
              <FontAwesomeIcon icon={faCaretDown} className="mx-2" />
              Adresimiz
            </h5>
            <p>İstanbul Maltepe 34000 Mükemmel Caddesi No:19</p>

            <h5>
              <FontAwesomeIcon icon={faPhone} className="mx-2 small" />
              Telefon
            </h5>
            <a className="telefon d-block mb-3" href="tel:+905456653359">
              545 665 33 49
            </a>

            {/* Google Maps */}
            <iframe
              className="mt-2"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8519.131282742635!2d29.115291750827065!3d40.9821870161225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac5f628de91b5%3A0x40c99806cc2dff20!2sAc%C4%B1badem%20%C3%9Cniversitesi!5e0!3m2!1str!2str!4v1730182835846!5m2!1str!2str"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>

            {/* Sosyal Medya */}
            <ul className=" mt-3 d-flex gap-3 justify-content-center justify-content-lg-start">
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/cretivodigital"
                >
                  <FontAwesomeIcon icon={faInstagram} size="xl" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://wa.me/905456653359"
                >
                  <FontAwesomeIcon icon={faWhatsapp} size="xl" className="button-whatsapp2" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
