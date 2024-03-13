import React from "react";
import Classes from "../Styles/Footer.module.css";
import footerLogo from "../assets/footerlogo.jpg";

function Footer() {
  // Nomor WhatsApp dan pesan
  const phoneNumber = "+8801305282768";
  const message = "Saya tertarik untuk berlangganan newsletter.";

  // Membuat link WhatsApp dengan nomor dan pesan
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <footer className={Classes.footerContainer}>
      <div className={Classes.footer}>
        <div className={Classes.footerLogo}>
          <a href="#hero">
            <img src={footerLogo} alt="" />
            <p>
              Selena <span>Travels</span>
            </p>
          </a>
        </div>

        <div className={Classes.footerInfo}>
          <h3>Temukan dunia dari kotak masuk Anda</h3>
          <p>
            Biarkan kami menginspirasi perjalanan Anda berikutnya dengan
            destinasi baru dan penawaran khusus
          </p>

          <div>
            <input
              type="email"
              placeholder="alamat email"
              style={{ padding: "10px", width: "80%", marginBottom: "10px" }}
            />
            {/* Mengubah button menjadi link WhatsApp */}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <button>Subscribe</button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
