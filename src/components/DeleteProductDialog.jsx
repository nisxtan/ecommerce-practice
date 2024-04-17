import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Typography from "@mui/material/Typography";

import DeleteIcon from "@mui/icons-material/Delete";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { deleteProduct } from "../library/apis";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DeleteProductDialog = () => {
  const [open, setOpen] = React.useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const productId = params?.id;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { isLoading, mutate } = useMutation({
    mutationKey: ["delete-product"],
    mutationFn: async () => {
      return await deleteProduct(productId);
    },
    onSuccess: (res) => {
      navigate("/products");
      queryClient.invalidateQueries("seller-product-list");
    },
    onError: (error) => {
      console.log(error?.response?.data?.message);
    },
  });

  return (
    <React.Fragment>
      <Button
        variant="contained"
        color="error"
        startIcon={<DeleteIcon />}
        onClick={handleClickOpen}
      >
        <Typography>Delete product</Typography>
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          {"Are you sure you want to delete this product?"}
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="contained">
            Cancel
          </Button>
          <Button
            onClick={() => {
              mutate();
              handleClose();
            }}
            color="error"
            variant="contained"
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default DeleteProductDialog;
