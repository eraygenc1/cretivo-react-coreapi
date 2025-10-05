import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container mt-5">
       <div className="row footer-top">
       <Link to="/">    <img
            style={{ width: "200px" }} 
            src="/assets/img/cretivo-logo-white.png"
            alt="Cretivo Logo"
          /></Link>
        </div>

        <div className="row mt-5">
          {/* Hızlı Linkler */}
          <div className="col-md-3">
            <h5>
              <i className="fa-solid fa-caret-down mx-2"></i>Hızlı Linkler
            </h5>
            <ul>
              {["Anasayfa", "Hakkımızda", "Hizmetler", "İletişim"].map(
                (item, i) => (
                  <li key={i} className="footerhizmetbaslik">
                    <a href="/">
                      {item}
                      <div className="footerline"></div>
                    </a>
                  </li>, <li key={i} className="footerhizmetbaslik">
                    <a href="/Hakkimizda">
                      {item}
                      <div className="footerline"></div>
                    </a>
                  </li>,
                   <li key={i} className="footerhizmetbaslik">
                    <a href="/Hizmetlerimiz">
                      {item}
                      <div className="footerline"></div>
                    </a>
                  </li>,
                   <li key={i} className="footerhizmetbaslik">
                    <a href="/Iletisim">
                      {item}
                      <div className="footerline"></div>
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Restoran Ürünleri */}
          <div className="col-md-3">
            <h5>
              <i className="fa-solid fa-caret-down mx-2"></i>Hızlı Linkler
            </h5>
            <ul>
              {["Anasayfa", "Hakkımızda", "Hizmetler", "İletişim"].map(
                (item, i) => (
                  <li key={i} className="footerhizmetbaslik">
                    <a href="/">
                      {item}
                      <div className="footerline"></div>
                    </a>
                  </li>, <li key={i} className="footerhizmetbaslik">
                    <a href="/Hakkimizda">
                      {item}
                      <div className="footerline"></div>
                    </a>
                  </li>,
                   <li key={i} className="footerhizmetbaslik">
                    <a href="/Hizmetlerimiz">
                      {item}
                      <div className="footerline"></div>
                    </a>
                  </li>,
                   <li key={i} className="footerhizmetbaslik">
                    <a href="/Iletisim">
                      {item}
                      <div className="footerline"></div>
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          {/* Kurumsal Kimlik */}
          <div className="col-md-3">
            <h5>
              <i className="fa-solid fa-caret-down mx-2"></i>Hızlı Linkler
            </h5>
            <ul>
              {["Anasayfa", "Hakkımızda", "Hizmetler", "İletişim"].map(
                (item, i) => (
                  <li key={i} className="footerhizmetbaslik">
                    <a href="/">
                      {item}
                      <div className="footerline"></div>
                    </a>
                  </li>, <li key={i} className="footerhizmetbaslik">
                    <a href="/Hakkimizda">
                      {item}
                      <div className="footerline"></div>
                    </a>
                  </li>,
                   <li key={i} className="footerhizmetbaslik">
                    <a href="/Hizmetlerimiz">
                      {item}
                      <div className="footerline"></div>
                    </a>
                  </li>,
                   <li key={i} className="footerhizmetbaslik">
                    <a href="/Iletisim">
                      {item}
                      <div className="footerline"></div>
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Adres */}
          <div className="col-md-3">
            <h5>
              <i className="fa-solid fa-caret-down mx-2"></i>Adresimiz
            </h5>
            <p>İstanbul Maltepe 34000 Mükemmel Caddesi No:19</p>

            <h5>
              <i className="fa-solid fa-phone mx-2 small"></i>Telefon
            </h5>
            <a className="telefon" href="tel:+905456653359">
              545 665 33 49
            </a>

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

            <ul className="social mt-3">
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/cretivodigital"
                >
                  <i className="fa-brands fa-instagram gradient"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://wa.me/905456653359?"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
