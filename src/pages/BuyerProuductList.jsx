import React from "react";
import { Box, CircularProgress } from "@mui/material";
import ProductCard from "../components/ProductCard";
import { useQuery } from "react-query";
import $axios from "../library/axios.instance";

const BuyerProductList = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["buyer-product-list"],
    queryFn: async () => {
      return await $axios.post("/product/list/buyer", {
        page: 1,
        limit: 10,
      });
    },
  });

  const productList = data?.data?.productList;

  if (isLoading) {
    return <CircularProgress color="secondary" />;
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "2rem",
      }}
    >
      {productList.map((item) => {
        return <ProductCard key={item._id} {...item} />;
      })}
    </Box>
  );
};

export default BuyerProductList;
