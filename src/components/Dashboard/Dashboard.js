import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Header from "../Header/Header";
import Books from "./Books";


const mdTheme = createTheme();

function Dashboard () {

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex", backgroundColor: 'black' }}>
        <CssBaseline />
        <Header />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Box
          sx={{ p: 2 }}
          >
            <Grid container sx={{ m: 2 }}>
              <Grid item xs={12}>
                <Typography
                  component="h1"
                  variant="h5"
                  color="inherit"
                  noWrap
                  sx={{ flexGrow: 1, textAlign: "left"}}
                >
                  <ins>Latest</ins>
                </Typography>
              </Grid>
            </Grid>
            <Box
            sx={{ display: 'flex' }}
            >
              <Books />
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Dashboard;
