import { Chip, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { fallbackImage } from "../constant/general.constants";
import { useNavigate } from "react-router-dom";
const ProductCard = (props) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        width: "25%",
        boxShadow:
          " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
      }}
    >
      <img
        src={props.image || fallbackImage}
        alt="Image"
        style={{
          width: "100%",
          marginTop: "1rem",
          height: "300px",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate(`/product-details/${props._id}`);
        }}
      />
      <CardContent>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Chip label={props.brand} color="secondary" variant="outlined" />
        </Stack>

        <Typography variant="body2" color="text.secondary" textAlign="justify">
          {props.description.trim()}...
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="success"
          fullWidth
          onClick={() => {
            navigate(`/product-details/${props._id}`);
          }}
        >
          Explore
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
