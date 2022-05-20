import React, { useState, useEffect } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Navbar from "../../components/Navbar/Navbar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Header from "../Header/Header";
import Books from "./Books";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/AuthSlice";


const mdTheme = createTheme();

function Dashboard () {
  // const [books, setBooks] = useState();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       let res = await axios.get("./books.json");
  //       let booksData = res.data;
  //       console.log(booksData);
  //       setBooks(booksData);
  //       console.log(setBooks(booksData));
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
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

{
  /* <Grid container>
            <Grid item xs={12}>
              <Typography
                component="h1"
                variant="h5"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1, textAlign: "left", m: 2 }}
              >
                <ins>Latest</ins>
              </Typography>
            </Grid>
          </Grid> */
}

{
  /* <Box>
          
          <Grid>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Box> */
}
