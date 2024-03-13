import React from "react";
import avatar from "../assets/avatar.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function Testimonials() {
  const data = [
    {
      name: "Rahmi Abdullah",
      occupation: "Guru SD",
      avatar: avatar,
      testimonial:
        "Selena Tevel memiliki website yang mudah digunakan. Mudah untuk navigasi, mencari, dan mengubah tanggal tanpa harus menelepon. Setelah memutuskan, proses pemesanan cepat dan mudah, terima kasih.",
    },
    {
      name: "Anton Susanto",
      occupation: "Ahli Peneliti",
      avatar: avatar2,
      testimonial:
        "Komunikasi yang baik. Ini adalah pemesanan yang terburu-buru dan dia sangat membantu / cepat dalam panggilan / balasan untuk memastikan kami bisa mendapatkan tanggal yang diinginkan.",
    },
    {
      name: "Siti Nurlela",
      occupation: "Guru SMA",
      avatar: avatar3,
      testimonial:
        "Saya harus mengatakan bahwa layanan yang kami terima dari perusahaan ini luar biasa dan akan merekomendasikan mereka kepada siapa saja untuk mempercayai dan menggunakan mereka, hadiah yang Anda dapatkan dengan liburan Anda sungguh fantastis.",
    },
    {
      name: "Budi Santoso",
      occupation: "Dokter Umum",
      avatar: avatar,
      testimonial:
        "Sangat puas dengan layanan dari Selena Tevel. Proses booking cepat dan mudah. Hotel-hotel yang direkomendasikan juga sangat memuaskan. Terima kasih!",
    },
    {
      name: "Dewi Lestari",
      occupation: "Penulis",
      avatar: avatar2,
      testimonial:
        "Pelayanan yang ramah dan profesional. Pengalaman liburan bersama Selena Tevel sangat menyenangkan dan memuaskan. Akan kembali menggunakan layanan mereka di masa mendatang.",
    },
    {
      name: "Ahmad Ibrahim",
      occupation: "Pengusaha",
      avatar: avatar3,
      testimonial:
        "Pengalaman menginap di hotel yang direkomendasikan oleh Selena Tevel luar biasa. Pelayanan yang ramah dan fasilitas yang lengkap membuat liburan kami berkesan.",
    },
  ];

  const testimonialBox = {
    backgroundColor: "#f9f9f9",
    margin: "10px",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "300px",
    flex: "0 0 auto",
  };

  const iconStyle = {
    fontSize: "24px",
    marginBottom: "10px",
  };

  const infoStyle = {
    display: "flex",
    alignItems: "center",
  };

  const imgStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    marginRight: "10px",
  };

  return (
    <section id="testimonials">
      <h1 style={{ textAlign: "center" }}>Pelanggan Puas</h1>

      <div style={{ display: "flex", overflowX: "auto", maxWidth: "100%" }}>
        {data.map((item, index) => (
          <div style={testimonialBox} key={index}>
            <FontAwesomeIcon icon={faQuoteLeft} style={iconStyle} />
            <p>{item.testimonial}</p>
            <div style={infoStyle}>
              <img src={item.avatar} alt="Foto Profil" style={imgStyle} />
              <div>
                <h3>{item.name}</h3>
                <span>{item.occupation}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
