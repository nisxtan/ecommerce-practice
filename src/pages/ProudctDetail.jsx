import { Box } from "@mui/material";
import React from "react";
import ProductImage from "../components/ProductImage";
import { useQuery } from "react-query";
import { getProductDetails } from "../library/apis";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import ProductDescription from "../components/ProductDescription";

const ProductDetail = () => {
  const params = useParams();

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["get-product-details"],
    queryFn: () => {
      return getProductDetails(params?.id);
    },
  });

  const productDetails = data?.data?.productDetails;
  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        maxWidth: "90%",

        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        margin: "2rem",

        gap: "2rem",
        boxShadow:
          " rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
      }}
    >
      <ProductImage imageUrl={productDetails?.image} />
      <ProductDescription {...productDetails} />
    </Box>
  );
};

export default ProductDetail;
