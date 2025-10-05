import React from 'react'
import  { useState, useEffect, useRef } from 'react';
import Isotope from 'isotope-layout';


function Services() {
  const isotope = useRef(null);
  const [filterKey, setFilterKey] = useState('*');
  const gridRef = useRef(null);

  // İlk mount olduğunda Isotope başlat
  useEffect(() => {
    isotope.current = new Isotope(gridRef.current, {
      itemSelector: '.filtered',
      layoutMode: 'fitRows',
    });

    // cleanup: sayfa değişince Isotope destroy
    return () => isotope.current?.destroy();
  }, []);

  // Filtre değiştiğinde Isotope’u güncelle
  useEffect(() => {
    if (isotope.current) {
      filterKey === '*'
        ? isotope.current.arrange({ filter: '*' })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  return (
    <div className="area2">
      <div className="container mt-5 mb-5">
        <h1 className="hizmetbaslik" data-aos="fade-up">Hizmetler</h1>
        <div className="baslikline"></div>

        {/* Filtre Butonları */}
        <div className="filters text-center my-4" data-aos="fade-up">
          <button className="btn-filter-black" onClick={() => setFilterKey('*')}>Tümü</button>
          <button className="btn-filter-black" onClick={() => setFilterKey('sosyal-medya')}>Sosyal Medya</button>
          <button className="btn-filter-black" onClick={() => setFilterKey('yazilim')}>Yazılım Geliştirme</button>
          <button className="btn-filter-black" onClick={() => setFilterKey('restoran')}>Restoran Ürün ve Hizmetleri</button>
          <button className="btn-filter-black" onClick={() => setFilterKey('grafik-tasarım')}>Grafik Tasarım</button>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="row mt-5 text-center" data-aos="fade-up">
          <div className="col-12 col-sm-6 col-md-3 mt-2 filtered sosyal-medya">
            <div className="box">
              <img src="assets/img/icon/1.svg" alt="" />
              <h5 className="mt-4">Sosyal Medya Yönetimi</h5>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mt-2 filtered yazilim">
            <div className="box">
              <img src="assets/img/icon/2.svg" alt="" />
              <h5 className="mt-4">Kurumsal Web Sitesi</h5>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mt-2 filtered grafik-tasarım">
            <div className="box">
              <img src="assets/img/icon/3.svg" alt="" />
              <h5 className="mt-4">Kurumsal Kimlik Tasarımı</h5>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mt-2 filtered restoran">
            <div className="box">
              <img src="assets/img/icon/4.svg" alt="" />
              <h5 className="mt-4">Restoran QR Menü Sistemi</h5>
            </div>
          </div>

          {/* Diğer kartlar */}
          <div className="col-12 col-sm-6 col-md-3 mt-2 filtered sosyal-medya">
            <div className="box">
              <img src="assets/img/icon/1.svg" alt="" />
              <h5 className="mt-4">Ürün Çekimleri</h5>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mt-2 filtered yazilim">
            <div className="box">
              <img src="assets/img/icon/2.svg" alt="" />
              <h5 className="mt-4">Laboratuvar Bilgi Sistemleri</h5>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mt-2 filtered restoran">
            <div className="box">
              <img src="assets/img/icon/3.svg" alt="" />
              <h5 className="mt-4">Firma Baskılı Restoran Ürünleri</h5>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mt-2 filtered grafik-tasarım">
            <div className="box">
              <img src="assets/img/icon/3.svg" alt="" />
              <h5 className="mt-4">Logo Tasarımı</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
