import React, { useState } from "react";

import Classes from "../Styles/Hero.module.css";
import Banner from "../assets/hero.png";

function Hero() {
  const [modal, setModal] = useState(false);

  const handleBookNow = () => {
    window.open("https://wa.me/6281234567890", "_blank");
  };

  return (
    <>
      <div className={!modal && Classes.open}>
        <div className={Classes.modalContainer}>
          <h5>Kami telah menerima informasi Anda</h5>
          <button onClick={() => setModal(false)}>Ok</button>
        </div>
      </div>

      <section id="hero" className={Classes.heroContainer}>
        <div className={Classes.heroimage}>
          <img src={Banner} alt="" />
        </div>

        <div className={Classes.content}>
          <div className={Classes.title}>
            <h1>
              Travel & Jelajahi Bersama{" "}
              <span className={Classes.nickName}>Selena Travels</span>
            </h1>
            <p>
              Hemat setidaknya 15% untuk menginap di seluruh dunia, dari tempat
              rekreasi yang santai hingga petualangan off-grid
            </p>
          </div>

          <div className={Classes.bookingContainer}>
            <div className={Classes.search}>
              <label>Ke mana Anda ingin pergi</label>
              <input type="text" placeholder="Cari lokasi Anda" />
            </div>

            <div className={Classes.search}>
              <label>Check-in</label>
              <input type="date" />
            </div>

            <div className={Classes.search}>
              <label>Check-out</label>
              <input type="date" />
            </div>

            <button onClick={handleBookNow}>pesan sekarang</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
