import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getSellerProducts } from "../library/apis";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";

const SellerProductList = () => {
  const navigate = useNavigate();
  const goToAddProduct = () => {
    navigate("/add-product");
  };

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["seller-product-list"],
    queryFn: () => {
      return getSellerProducts();
    },
  });

  const productList = data?.data?.productList;
  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box>
      <Button variant="contained" color="success" onClick={goToAddProduct}>
        Add Product
      </Button>

      <Box
        sx={{
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {productList.map((item) => {
          return <ProductCard key={item._id} {...item} />;
        })}
      </Box>
    </Box>
  );
};

export default SellerProductList;
