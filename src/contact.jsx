import React from "react";

export default function contact() {
  return (
    <div className="area2">
      <div className="container mt-5">
        <h1 className="hizmetbaslik text-white">İletişim</h1>
        <div className="baslikline bg-white"></div>

        <div data-aos="fade-up" className="row text-center mt-5">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <form action="action_page.php" style={{ maxWidth: "600px" }}>
                <label className="justify-content-start" htmlFor="fname">
                  Adınız
                </label>
                <input
                  type="text"
                  id="fname"
                  name="name"
                  placeholder="Ad giriniz..."
                />

                <label htmlFor="lname">Soyisim</label>
                <input
                  type="text"
                  id="lname"
                  name="surname"
                  placeholder="Soyad giriniz..."
                />

                <label htmlFor="mail">E-Mail</label>
                <input
                  type="text"
                  id="email"
                  name="mail"
                  placeholder="E-Mail giriniz..."
                />

                <label htmlFor="subject">İleti</label>
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Buraya mesajınızı giriniz..."
                  style={{ height: "200px" }}
                ></textarea>

                <input
                  className="btn-filter-black"
                  type="submit"
                  value="Gönder"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
