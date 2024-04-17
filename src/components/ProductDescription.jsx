import {
  Button,
  Checkbox,
  Chip,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import DeleteProductDialog from "./DeleteProductDialog";
const ProductDescription = (props) => {
  const userRole = localStorage.getItem("userRole");
  console.log(props);

  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  // console.log(count);

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <Grid container direction="column" spacing={2} sx={{ width: "50%" }}>
      <Grid item>
        <Typography variant="h5">{props.name}</Typography>
      </Grid>

      <Grid item>
        <Chip
          label={props.brand}
          color="secondary"
          variant="outlined"
          className="product-brand-chip"
        />
      </Grid>

      <Grid item>
        <Typography textAlign="justify">{`${props.description}`}</Typography>
      </Grid>

      <Grid item>
        <Stack direction="row" spacing={2}>
          <Typography>Available quantity:</Typography>
          <Typography>{props.quantity}</Typography>
        </Stack>
      </Grid>

      <Grid item>
        <Stack direction="row" spacing={2}>
          <Typography>Price:</Typography>
          <Typography>{props.price}</Typography>
        </Stack>
      </Grid>
      <Grid item>
        <Chip label={props.category} variant="outlined" />
      </Grid>

      <Grid item>
        <Stack direction="row" sx={{ alignItems: "center" }}>
          <Typography>Free shipping</Typography>
          <Checkbox checked={props.freeShipping} color="warning" />
        </Stack>
      </Grid>

      {userRole === "buyer" && (
        <>
          <Grid item>
            <Stack direction="row" alignItems="center" spacing={2}>
              <IconButton onClick={decreaseCount}>
                <RemoveIcon />
              </IconButton>
              <Typography>{count}</Typography>
              <IconButton onClick={increaseCount}>
                <AddIcon />
              </IconButton>
            </Stack>
          </Grid>

          <Grid item>
            <Button variant="contained" color="success">
              Add to cart
            </Button>
          </Grid>
        </>
      )}
      {userRole === "seller" && (
        <>
          <Stack direction="row" spacing={4}>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<EditIcon />}
              onClick={() => {
                navigate(`/product/edit/${props._id}`);
              }}
            >
              <Typography>Edit product</Typography>
            </Button>
            {/* delete button */}
            <DeleteProductDialog />
          </Stack>
        </>
      )}
    </Grid>
  );
};

export default ProductDescription;
