import React from "react";
import CartTable from "../components/CartTable";
import OrderSummary from "../components/OrderSummary";
import { Box } from "@mui/material";

const Cart = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100vw",
        gap: "5rem",
        justifyContent: "space-around",
      }}
    >
      <CartTable />
      <OrderSummary />
    </Box>
  );
};

export default Cart;
