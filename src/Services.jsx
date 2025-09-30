import React from 'react'

function Services() {
  return (
    <div><div className="area2" >
        <div className="container mt-5 mb-5">
          <h1 className="hizmetbaslik" data-aos="fade-up">Hizmetler</h1>
          <div className="baslikline"></div>
          <div className="filters text-center my-4" data-aos="fade-up">
            <button className="btn-filter-black filter-btn" data-filter="*">Tümü</button>
            <button className="btn-filter-black filter-btn" data-filter=".sosyal-medya">Sosyal Medya</button>
            <button className="btn-filter-black filter-btn" data-filter=".yazilim">Yazılım Geliştirme</button>
            <button className="btn-filter-black filter-btn" data-filter=".restoran">Restoran Ürün ve Hizmetleri</button>
            <button className="btn-filter-black filter-btn" data-filter=".grafik-tasarım">Grafik Tasarım</button>
          </div>
        
          <div  className="d-flex text-center mt-5 " data-aos="fade-up">
            <div className="container ">
              <div className="row">
                <div className="col-12 col-sm-6 col-md-3 mt-2 filtered sosyal-medya" >
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
               
            
                <div className="col-12 col-sm-6 col-md-3 mt-2 filtered sosyal-medya">
                  <div className="box">
                    <img src="assets/img/icon/1.svg" alt="" />
                    <h5 className="mt-4">Ürün çekimleri</h5>
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
                    <h5 className="mt-4">Logo Tasarımı
                    </h5>
                  </div>
                </div>
              </div>
          
            </div>
            
            
          </div>
          
        </div>
      </div></div>
  )
}

export default Services