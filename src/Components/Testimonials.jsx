import React from "react";
import avatar from "../assets/avatar.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function Testimonials() {
  const data = [
      {
        name: "Fitriani Putri",
        occupation: "Mahasiswa",
        testimonial:
          "Perjalanan bersama Selena Travel benar-benar luar biasa. Mereka tidak hanya menyediakan pengalaman liburan yang menyenangkan, tetapi juga membantu kami menjelajahi destinasi wisata dengan lebih baik. Terima kasih atas pengalaman yang tak terlupakan!",
      },
      {
        name: "Hendri Gunawan",
        occupation: "Pegawai Swasta",
        testimonial:
          "Saya sangat senang dengan pelayanan Selena Travel. Mereka sangat responsif dan membantu kami dengan segala kebutuhan kami selama perjalanan. Pengalaman kami bersama Selena Travel sungguh mengesankan!",
      },
      {
        name: "Siti Rahmawati",
        occupation: "Ibu Rumah Tangga",
        testimonial:
          "Selama perjalanan bersama Selena Travel, kami merasa aman dan nyaman. Mereka memiliki staf yang ramah dan berpengetahuan luas tentang destinasi kami. Kami pasti akan merekomendasikan mereka kepada teman dan keluarga!",
      },
      {
        name: "Muhammad Fadillah",
        occupation: "Wiraswasta",
        testimonial:
          "Saya sangat terkesan dengan profesionalisme dan keramahan staf Selena Travel. Mereka mengatur semua dengan sempurna, mulai dari akomodasi hingga transportasi. Pengalaman liburan bersama mereka benar-benar menyenangkan!",
      },
      {
        name: "Larasati Indah",
        occupation: "Pelajar",
        testimonial:
          "Perjalanan bersama Selena Travel menjadi salah satu momen terbaik dalam hidup saya. Mereka membantu kami menemukan tempat-tempat menarik dan memberikan layanan yang sangat baik. Terima kasih Selena Travel!",
      },
      {
        name: "Yoga Pratama",
        occupation: "Karyawan Kantor",
        testimonial:
          "Saya sangat puas dengan pelayanan Selena Travel. Mereka mengurus semua detail perjalanan kami dengan sempurna, memberikan kami pengalaman liburan yang tak terlupakan. Terima kasih atas keramahan dan kerja kerasnya!",
      },
      {
        name: "Nurul Hidayah",
        occupation: "Freelancer",
        testimonial:
          "Selena Travel benar-benar mengubah cara saya melihat liburan. Mereka tidak hanya memberikan pengalaman yang luar biasa, tetapi juga memberikan saran yang berharga untuk menjelajahi destinasi. Saya tidak sabar untuk berlibur dengan mereka lagi!",
      },
      {
        name: "Agus Salim",
        occupation: "Pengajar",
        testimonial:
          "Saya sangat terkesan dengan kualitas layanan dari Selena Travel. Mereka sangat memperhatikan detail dan selalu siap membantu kami dengan segala kebutuhan selama perjalanan. Pengalaman liburan kami tidak akan sehebat ini tanpa mereka!",
      },
      {
        name: "Rini Suryani",
        occupation: "Wiraswasta",
        testimonial:
          "Perjalanan bersama Selena Travel menjadi momen yang tak terlupakan bagi kami. Mereka tidak hanya menyediakan pengalaman liburan yang mengesankan, tetapi juga memberikan pelayanan yang sangat ramah dan profesional. Terima kasih atas semua yang telah mereka lakukan!",
      },
      {
        name: "Faisal Rahman",
        occupation: "Pegawai Bank",
        testimonial:
          "Saya tidak bisa cukup menekankan betapa luar biasanya perjalanan kami dengan Selena Travel. Mereka membuat segalanya menjadi mudah dan menyenangkan, mulai dari pemesanan hingga akomodasi. Terima kasih atas pengalaman liburan yang luar biasa!",
      },
      {
        name: "Anisa Fitriani",
        occupation: "Pelajar",
        testimonial:
          "Selena Travel tidak hanya memberikan pengalaman liburan yang menyenangkan, tetapi juga membantu kami menjelajahi tempat-tempat menarik di destinasi kami. Mereka adalah mitra perjalanan yang sempurna bagi kami!",
      },
      {
        name: "Andre Wijaya",
        occupation: "Pegawai Swasta",
        testimonial:
          "Saya sangat senang dengan layanan Selena Travel. Mereka sangat responsif dan membantu kami dengan segala kebutuhan kami selama perjalanan. Pengalaman kami bersama mereka sungguh mengesankan!",
      },
      {
        name: "Dina Pratiwi",
        occupation: "Mahasiswa",
        testimonial:
          "Selena Travel membantu kami menciptakan kenangan tak terlupakan selama liburan
      ]}
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
