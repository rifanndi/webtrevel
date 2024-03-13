import React, { useState } from "react";
import "../Styles/Recommendation.css";
import DestinationModal from "./DestinationModal";
import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

function Recommendation() {
  const [active, setActive] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);

  const data = [
    {
      image: Destination1, // Gambar destinasi Jogja 1
      title: "Paket Wisata Lava Tour Merapi",
      subTitle: "Jelajahi keindahan Gunung Merapi dan pengalaman Lava Tour",
      cost: "Rp 350.000",
      duration: "Durasi: 4 jam",
      details: [
        "Kunjungi Desa Kaliadem",
        "Pengalaman Merapi Lava Tour dengan Jeep",
        "Explore Bunker Kaliadem",
        "Makan siang di restoran lokal",
      ],
      whatsappLink: "https://wa.me/1234567890", // Ganti dengan nomor WhatsApp yang ingin dituju
    },
    {
      image: Destination2, // Gambar destinasi Jogja 2
      title: "Paket Wisata Candi Prambanan dan Candi Boko",
      subTitle: "Menikmati keindahan Candi Prambanan dan Candi Boko",
      cost: "Rp 250.000",
      duration: "Durasi: 5 jam",
      details: [
        "Explore Candi Prambanan",
        "Kunjungi Candi Boko",
        "Makan siang di restoran lokal dengan hidangan Indonesia",
      ],
      whatsappLink: "https://wa.me/1234567891", // Ganti dengan nomor WhatsApp yang ingin dituju
    },
    {
      image: Destination3, // Gambar destinasi Jogja 3
      title: "Paket Wisata Malioboro Shopping",
      subTitle: "Berbelanja dan merasakan keseruan di jalan Malioboro",
      cost: "Rp 150.000",
      duration: "Durasi: 4 jam",
      details: [
        "Belanja di jalan Malioboro",
        "Kunjungi Pasar Beringharjo",
        "Coba makanan khas di jalanan",
      ],
      whatsappLink: "https://wa.me/1234567892", // Ganti dengan nomor WhatsApp yang ingin dituju
    },
    {
      image: Destination4, // Gambar destinasi Jogja 4
      title: "Paket Wisata Pindul Cave Tubing",
      subTitle: "Petualangan di sungai bawah tanah Gua Pindul",
      cost: "Rp 300.000",
      duration: "Durasi: 3 jam",
      details: [
        "Jelajahi Gua Pindul dengan tubing",
        "Nikmati pemandangan indah di sepanjang sungai bawah tanah",
        "Makan siang di warung lokal",
      ],
      whatsappLink: "https://wa.me/1234567893", // Ganti dengan nomor WhatsApp yang ingin dituju
    },
    {
      image: Destination5, // Gambar destinasi Jogja 5
      title: "Paket Wisata Kasongan Pottery Village",
      subTitle: "Menemukan kerajinan tradisional di Desa Kasongan",
      cost: "Rp 180.000",
      duration: "Durasi: 4 jam",
      details: [
        "Kunjungi Desa Kasongan",
        "Belajar proses pembuatan kerajinan tanah liat tradisional",
        "Berbelanja kerajinan unik sebagai oleh-oleh",
      ],
      whatsappLink: "https://wa.me/1234567894", // Ganti dengan nomor WhatsApp yang ingin dituju
    },
    {
      image: Destination6, // Gambar destinasi Jogja 6
      title: "Paket Wisata Alun-Alun Kidul",
      subTitle: "Menikmati suasana malam di Alun-Alun Kidul",
      cost: "Rp 200.000",
      duration: "Durasi: 3 jam",
      details: [
        "Bermain di Alun-Alun Kidul",
        "Mencoba makanan khas Yogyakarta",
        "Menikmati hiburan malam di sekitar alun-alun",
      ],
      whatsappLink: "https://wa.me/1234567895", // Ganti dengan nomor WhatsApp yang ingin dituju
    },
  ];

  const openDestinationModal = (destination) => {
    setSelectedDestination(destination);
    setOpenModal(true);
  };

  const closeDestinationModal = () => {
    setOpenModal(false);
    setSelectedDestination(null);
  };

  const packages = [
    // "Liburan Akhir Pekan",
    // "Liburan Paket",
    // "Tur Kelompok",
    // "Perjalanan Lama yang Lambat",
  ];

  return (
    <section id="recommendation" className="recommendation">
      <div className="title">
        <h1 style={{ color: "black" }}>Recommend</h1>
        <div className="CategoryBar">
          <ul>
            {packages.map((pkg, index) => {
              return (
                <li
                  key={index}
                  className={active === index + 1 ? "Active" : ""}
                  onClick={() => setActive(index + 1)}
                >
                  {pkg}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="recommendationBox">
        {data.map((item, index) => {
          return (
            <div className="box" key={index}>
              <a
                href="#!"
                onClick={(e) => {
                  e.preventDefault();
                  openDestinationModal(item);
                }}
                style={{ textDecoration: "none" }}
              >
                <div className="image">
                  <img src={item.image} alt="image" />
                </div>
                <h3 style={{ color: "black" }}>{item.title}</h3>
                <p style={{ color: "black" }}>{item.subTitle}</p>

                <div className="price">
                  <div>
                    <img src={info1} alt="info" />
                    <img src={info2} alt="info" />
                    <img src={info3} alt="info" />
                  </div>

                  <p style={{ color: "black" }}>${item.cost}</p>
                </div>

                <div className="details">
                  <p style={{ color: "black" }}>1500 kms</p>
                  <p style={{ color: "black" }}>{item.duration}</p>
                </div>
              </a>
            </div>
          );
        })}
      </div>

      {selectedDestination && (
        <DestinationModal
          open={openModal}
          onClose={closeDestinationModal}
          destination={selectedDestination}
        />
      )}
    </section>
  );
}

export default Recommendation;
