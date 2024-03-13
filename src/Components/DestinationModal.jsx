import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DestinationModal({ open, onClose, destination }) {
  const handleDetailClick = () => {
    const whatsappMessage = `Hi, saya tertarik dengan ${destination.title}. Mohon informasi lebih lanjut.`;
    const whatsappNumber = "1234567890"; // Ganti dengan nomor WhatsApp yang ingin dituju

    // Constructing the WhatsApp link
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open the link in a new tab
    window.open(whatsappLink, "_blank");
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <DialogTitle>{destination.title}</DialogTitle>
        <DialogContent>
          <img
            src={destination.image}
            alt={destination.title}
            style={{ width: "100%", marginBottom: 10 }}
          />
          <DialogContentText id="alert-dialog-slide-description">
            {destination.subTitle}
          </DialogContentText>
          <DialogContentText>Biaya: Rp {destination.cost}</DialogContentText>
          <DialogContentText>Durasi: {destination.duration}</DialogContentText>
          <DialogContentText>
            Detail Kunjungan:
            <ul>
              {destination.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="secondary">
            Tutup
          </Button>
          <Button
            onClick={handleDetailClick}
            sx={{
              bgcolor: "orange",
              color: "white",
              "&:hover": {
                bgcolor: "darkorange",
              },
            }}
          >
            Detail
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
