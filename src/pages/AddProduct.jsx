import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Checkbox,
  Button,
  Stack,
  LinearProgress,
  Box,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { useMutation } from "react-query";
import { addProduct } from "../library/apis.js";
import { useNavigate } from "react-router-dom";
import { productCategories } from "../constant/general.constants";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const AddProduct = () => {
  const navigate = useNavigate();
  const { isLoading, mutate } = useMutation({
    mutationKey: ["add-product"],
    mutationFn: addProduct,
    onSuccess: (response) => {
      navigate("/products");
    },
    onError: (error) => {
      console.log(error?.response?.data?.message);
    },
  });

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {isLoading && <LinearProgress color="secondary" />}
      <Formik
        initialValues={{
          name: "",
          brand: "",
          price: 0,
          quantity: 1,
          category: "",
          freeShipping: false,
          description: "",
          image: null,
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Name is required.")
            .trim()
            .max(55, "Name must be at max 55 characters."),
          brand: Yup.string()
            .required("Brand is required.")
            .trim()
            .max(55, "Brand must be at max 55 characters."),
          price: Yup.number()
            .min(0, "Price must be at least 0.")
            .required("Price is required."),
          quantity: Yup.number()
            .min(1, "Quantity must be at least 1.")
            .required("Quantity is required."),
          category: Yup.string()
            .required("Select a category.")
            .trim()
            .oneOf(productCategories),
          freeShipping: Yup.boolean().default(false),
          description: Yup.string()
            .required("Description is required.")
            .trim()
            .min(500, "Description must be at least 500 characters.")
            .max(1000, "Description must be at max 1000 characters."),
          image: Yup.string().trim().nullable(),
        })}
        onSubmit={(values) => {
          mutate(values);
        }}
      >
        {({ handleSubmit, touched, errors, getFieldProps }) => (
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              padding: "1.5rem",
              width: "450px",
              boxShadow:
                "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
            }}
          >
            <Typography variant="h5">Add Product</Typography>

            <FormControl>
              <TextField label="Name" {...getFieldProps("name")} />
              {touched.name && errors.name ? (
                <FormHelperText error>{errors.name}</FormHelperText>
              ) : null}
            </FormControl>

            <FormControl>
              <TextField label="Brand" {...getFieldProps("brand")} />
              {touched.brand && errors.brand ? (
                <FormHelperText error>{errors.brand}</FormHelperText>
              ) : null}
            </FormControl>

            <FormControl>
              <TextField
                label="Price"
                {...getFieldProps("price")}
                type="number"
              />
              {touched.price && errors.price ? (
                <FormHelperText error>{errors.price}</FormHelperText>
              ) : null}
            </FormControl>

            <FormControl>
              <TextField
                label="Quantity"
                {...getFieldProps("quantity")}
                type="number"
              />
              {touched.quantity && errors.quantity ? (
                <FormHelperText error>{errors.quantity}</FormHelperText>
              ) : null}
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select label="Category" {...getFieldProps("category")}>
                {productCategories.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
              {touched.category && errors.category ? (
                <FormHelperText error>{errors.category}</FormHelperText>
              ) : null}
            </FormControl>
            <FormControl>
              <Stack
                direction="row"
                sx={{
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Typography>Free shipping</Typography>
                <Checkbox {...label} {...getFieldProps("freeShipping")} />
              </Stack>
            </FormControl>

            <FormControl>
              <TextField
                label="Description"
                multiline
                rows={7}
                {...getFieldProps("description")}
              />
              {touched.description && errors.description ? (
                <FormHelperText error>{errors.description}</FormHelperText>
              ) : null}
            </FormControl>

            <Button
              type="submit"
              variant="contained"
              color="secondary"
              disabled={isLoading}
            >
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default AddProduct;
