import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import $axios from "../library/axios.instance";

const Login = () => {
  const navigate = useNavigate();
  const { isLoading, isError, error, mutate } = useMutation({
    mutationKey: ["login-user"],
    mutationFn: async (values) => {
      return await $axios.post("/user/login", values);
    },
    onSuccess: (response) => {
      // save token , user role and user name in local storage
      localStorage.setItem("token", response?.data?.token);
      localStorage.setItem("userRole", response?.data?.user?.role);
      localStorage.setItem("firstName", response?.data?.user?.firstName);
      localStorage.setItem("lastName", response?.data?.user?.lastName);
      console.log(response);
      navigate("/home");
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
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .required("Email is required.")
            .email("Email must be in proper email format.")
            .trim(),

          password: Yup.string().required("Password is required."),
        })}
        onSubmit={(values) => {
          // console.log(values);
          mutate(values);
        }}
      >
        {(formik) => (
          <>
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
              <Typography variant="h5">Sign In</Typography>
              <FormControl>
                <TextField label="Email" {...formik.getFieldProps("email")} />
                {formik.touched.email && formik.errors.email ? (
                  <FormHelperText error>{formik.errors.email}</FormHelperText>
                ) : null}
              </FormControl>

              <FormControl>
                <TextField
                  label="Password"
                  type="password"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password ? (
                  <FormHelperText error>
                    {formik.errors.password}
                  </FormHelperText>
                ) : null}
              </FormControl>
              <Button type="submit" variant="contained" color="success">
                Login
              </Button>
              <Link to="/register">
                <Typography variant="body2">New here? Sign up.</Typography>
              </Link>
            </form>
          </>
        )}
      </Formik>
    </Box>
  );
};

export default Login;
