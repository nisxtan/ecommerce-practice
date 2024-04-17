import { Box, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductImage = (props) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ width: "50%" }}>
      <img
        src={props.imageUrl}
        alt=""
        style={{
          width: "500px",
        }}
        
      />
    </Box>
  );
};

export default ProductImage;
