import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  InputLabel,
  LinearProgress,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { useMutation } from "react-query";
import axios from "axios";
import $axios from "../library/axios.instance";

const Register = () => {
  const navigate = useNavigate();
  const { isLoading, isError, error, mutate } = useMutation({
    mutationKey: ["register-user"],
    mutationFn: async (values) => {
      return await $axios.post("/user/register", values);
    },
    onSuccess: (response) => {
      console.log(response);
      navigate("/login");
    },
    onError: (error) => {
      console.log(error?.response?.data?.message);
    },
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {isLoading && <LinearProgress color="success" />}
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          dob: "",
          gender: "",
          role: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .required("First name is required.")
            .trim()
            .max(25, "First name must at max be 25 characters."),
          lastName: Yup.string()
            .required("Last name is required.")
            .trim()
            .max(25, "Last name must at max be 25 characters."),

          email: Yup.string()
            .email("Should be in proper email format.")
            .required("Email is required.")
            .trim()
            .max(55, "Email must at max be 55 characters."),

          password: Yup.string()
            .required("password is required.")
            .min(4, "password must at least be 2 characters long.")
            .max(20, "password must at max be 20 characters long."),

          role: Yup.string().required().trim().oneOf(["buyer", "seller"]),

          gender: Yup.string()
            .trim()
            .oneOf(["male", "female", "other"])
            .nullable(),
          dob: Yup.date().nullable(),
        })}
        onSubmit={(values) => {
          console.log(values);
          values.dob = null;
          values.gender = null;
          mutate(values);
        }}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              backgroundColor: "white",
              color: "black",
              width: "330px",
              boxShadow: "rgba(3, 3, 3, 0.936) 0px 30px 90px",
              padding: "2rem",
            }}
          >
            <Typography variant="h5">Sign Up</Typography>
            <FormControl>
              <TextField
                label="First Name"
                {...formik.getFieldProps("firstName")}
              />

              {formik.touched.firstName && formik.errors.firstName ? (
                <FormHelperText error>{formik.errors.firstName}</FormHelperText>
              ) : null}
            </FormControl>

            <FormControl>
              <TextField
                label="Last Name"
                {...formik.getFieldProps("lastName")}
              />

              {formik.touched.lastName && formik.errors.lastName ? (
                <FormHelperText error>{formik.errors.lastName}</FormHelperText>
              ) : null}
            </FormControl>

            <FormControl>
              <TextField label="Email" {...formik.getFieldProps("email")} />

              {formik.touched.email && formik.errors.email ? (
                <FormHelperText error>{formik.errors.email}</FormHelperText>
              ) : null}
            </FormControl>

            <FormControl>
              <TextField
                label="Password"
                {...formik.getFieldProps("password")}
              />

              {formik.touched.password && formik.errors.password ? (
                <FormHelperText error>{formik.errors.password}</FormHelperText>
              ) : null}
            </FormControl>

            <FormControl>
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                {...formik.getFieldProps("dob")}
              >
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    label="Date Of Birth"
                    minDate={dayjs().subtract(18, "year")}
                  />
                </DemoContainer>
              </LocalizationProvider>
              {formik.touched.dob && formik.errors.dob ? (
                <FormHelperText error>{formik.errors.dob}</FormHelperText>
              ) : null}
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select label="Gender" {...formik.getFieldProps("gender")}>
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
                <MenuItem value={"other"}>Prefer Not To Say</MenuItem>
              </Select>
              {formik.touched.gender && formik.errors.gender ? (
                <FormHelperText>{formik.errors.gender}</FormHelperText>
              ) : null}
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Role</InputLabel>
              <Select label="Role" {...formik.getFieldProps("role")}>
                <MenuItem value={"buyer"}>Buyer</MenuItem>
                <MenuItem value={"seller"}>Seller</MenuItem>
              </Select>
              {formik.touched.role && formik.errors.role ? (
                <FormHelperText error>{formik.errors.role}</FormHelperText>
              ) : null}
            </FormControl>
            <Button type="submit" variant="contained" color="success">
              Register
            </Button>
            <Link to="/login">
              <Typography variant="body2">
                Already a member? Login here.
              </Typography>
            </Link>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Register;
