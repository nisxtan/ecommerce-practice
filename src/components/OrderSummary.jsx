import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const OrderSummary = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "2rem",
        maxHeight: "250px",
        justifyContent: "center",
        alignItems: "center",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
    >
      <Typography variant="h5">Order Summary</Typography>
      <Stack direction="row">
        <Typography>Sub total</Typography>
        <Typography>Rs. 45000</Typography>
      </Stack>
      <Stack direction="row">
        <Typography>Discount:</Typography>
        <Typography>Rs. 1500</Typography>
      </Stack>
      <Stack direction="row">
        <Typography>Grand Total:</Typography>
        <Typography>Rs. 43500</Typography>
      </Stack>
      <Button variant="contained" color="success">
        Procced to checkout
      </Button>
    </Box>
  );
};

export default OrderSummary;
