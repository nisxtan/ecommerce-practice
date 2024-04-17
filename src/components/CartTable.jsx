import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Chip, Stack, Typography } from "@mui/material";

const CartTable = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        width: "60%",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                S.N
              </Typography>
            </TableCell>
            <TableCell align="center">
              {" "}
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Image
              </Typography>
            </TableCell>
            <TableCell align="center">
              {" "}
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Name
              </Typography>
            </TableCell>
            <TableCell align="center">
              {" "}
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Quantity
              </Typography>
            </TableCell>
            <TableCell align="center">
              {" "}
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Unit Price
              </Typography>
            </TableCell>
            <TableCell align="center">
              {" "}
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Subtotal
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Typography variant="body1">1</Typography>
            </TableCell>
            <TableCell>
              <Typography>
                <img
                  src="https://cdn1.smartprix.com/rx-ixUZqmGQy-w1200-h1200/xUZqmGQy.jpg"
                  alt=""
                  height="200px"
                />
              </Typography>
            </TableCell>
            <TableCell>
              <Stack>
                <Typography variant="h6">N1-Series</Typography>
                <Chip label="Acer" color="secondary" variant="outlined"></Chip>
              </Stack>
            </TableCell>
            <TableCell>
              <Typography variant="h6" align="center">
                3
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6" align="center">
                15000
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6" align="center">
                45000
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default CartTable;
