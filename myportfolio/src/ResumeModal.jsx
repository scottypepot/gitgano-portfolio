import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
export default function ResumeModal({ openCv, onCloseCv }) {
  return (
    <Modal
      open={openCv}
      onClose={onCloseCv}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{ backdrop: { timeout: 500 } }}
    >
      <Fade in={openCv}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "95vw", md: "40vw" },
            maxWidth: "95vw",
            height: { xs: "80vh", md: "95vh" },
            p: 2,
            borderRadius: 2,
          }}
        >
          <IconButton
            onClick={onCloseCv}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              zIndex: 10,
              bgcolor: "rgba(0,0,0,0.2)",
              "&:hover": { bgcolor: "rgba(0,0,0,0.4)" },
            }}
          >
            <CloseIcon sx={{ color: "white" }} />
          </IconButton>
          <embed
            src="/MyCvV3.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
          />
        </Box>
      </Fade>
    </Modal>
  );
}
