import React from 'react'

export default function Area3() {
  return (
    <div className="area3">
      <div className="container mt-5">
        <h1 className="hizmetbaslik">Biz Kimiz ?</h1>
        <div className="baslikline-black"></div>

        <div className="row mt-5">
          <div className="col-md-6">
            <p>
              Cretivo Dijital Medya Ajansı Hakkında
            </p>
            <p>
              Cretivo Dijital Medya Ajansı olarak, dijital dünyadaki yenilikleri yakından takip eden bir ekiple markalarınıza değer katıyoruz. Yaratıcı web tasarımları, etkileyici grafikler, stratejik sosyal medya yönetimi ve özel yazılım çözümleri sunarak işlerinizi bir adım öteye taşıyoruz.
            </p>
            <p>
              Misyonumuz, müşterilerimizin dijital dünyadaki varlığını güçlendirmek ve hedeflerine ulaşmalarını sağlamaktır.
            </p>
            <p>
              Yenilikçi QR menü sistemleri ve profesyonel ürün video/fotoğraf çekimleriyle rakiplerinizden sıyrılmanıza yardımcı oluyoruz.
            </p>

            <p>Değerlerimiz:</p>
            <p><i className="fa-solid fa-check"></i> Yaratıcılık</p>
            <p><i className="fa-solid fa-check"></i> Güvenilirlik</p>
            <p><i className="fa-solid fa-check"></i> Teknolojik Yenilikçilik</p>
            <p><i className="fa-solid fa-check"></i> Müşteri Memnuniyeti</p>

            <p>
              Siz de markanızı dijitalde parlatmak için bizimle{" "}
              <a
                href="/iletisim"
                style={{ textDecoration: "none", color: "var(--purplecolor)" }}
              >
                iletişime geçin!
              </a>
            </p>

            <p>Cretivo Dijital Medya Ajansı ile geleceğe bir adım daha yaklaşın.</p>
          </div>

          <div className="col-md-6">
            <img src="/assets/img/ekip.jpg" alt="Ekip" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  )
}
