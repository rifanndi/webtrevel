import React from "react";
import Classes from "../Styles/Services.module.css";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";

function Service() {
  const data = [
    {
      icon: service1,
      title: "Dapatkan Harga Terbaik",
      subTitle:
        "Bayar melalui aplikasi kami dan hemat ribuan serta dapatkan hadiah menarik.",
    },
    {
      icon: service2,
      title: "Aman dari Covid",
      subTitle:
        "Kami memiliki semua hotel yang sudah disiapkan dengan langkah-langkah pencegahan untuk lingkungan yang aman dari Covid.",
    },
    {
      icon: service3,
      title: "Pembayaran Fleksibel",
      subTitle:
        "Nikmati pembayaran fleksibel melalui aplikasi kami dan dapatkan hadiah setiap pembayaran.",
    },
    {
      icon: service4,
      title: "Temukan yang Terbaik di Sekitar Anda",
      subTitle:
        "Temukan hotel dan tempat wisata terbaik di sekitar Anda dalam satu klik.",
    },
  ];

  return (
    <section id="service" className={Classes.service}>
      {data.map((item, index) => (
        <div className={Classes.services} key={index}>
          <div className={Classes.icon}>
            <img src={item.icon} alt="" />
          </div>
          <h3>{item.title}</h3>
          <p>{item.subTitle}</p>
        </div>
      ))}
    </section>
  );
}

export default Service;
