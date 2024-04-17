import React from "react";
import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <Box
      sx={{
        height: "100px",
        width: "100vw",
        background: "#1B3C73",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 0,
        margin: 0,
      }}
    >
      <Typography variant="h4" sx={{ color: "#fff" }}>
        Copyright @ Nepal mart 2024
      </Typography>
    </Box>
  );
};

export default Footer;
