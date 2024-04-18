import React from "react";
import CartTable from "../components/CartTable";
import OrderSummary from "../components/OrderSummary";
import { Box, LinearProgress } from "@mui/material";
import { useQuery } from "react-query";
import $axios from "../library/axios.instance";
import NoCartItem from "../components/NoCartItems";

const Cart = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["get-cart-items"],
    queryFn: async () => {
      return $axios.get("/cart/item/list");
    },
  });

  const cartItems = data?.data?.cartItems;
  const orderSummary = data?.data?.orderSummary;
  const grandTotal = data?.data?.grandTotal;

  const productDataForOrdering = cartItems?.map((item) => {
    return {
      productId: item?.productId,
      orderedQuantity: item?.orderedQuantity,
      sellerId: item?.sellerId,
      unitPrice: item?.price,
      subTotal: item?.subTotal,
    };
  });
  if (isLoading) {
    return <LinearProgress />;
  }

  if (cartItems.length < 1) {
    return <NoCartItem />;
  }
  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: "4rem", md: null },
        justifyContent: "space-around",
      }}
    >
      <CartTable cartItems={cartItems} />
      <OrderSummary orderSummary={orderSummary} />
    </Box>
  );
};

export default Cart;
