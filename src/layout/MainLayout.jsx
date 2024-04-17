import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const MainLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        width: "100vw",
      }}
    >
      <Header />
      <Box
        sx={{
          display: "flex",
          padding: "2rem",
          direction: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Outlet />
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default MainLayout;
