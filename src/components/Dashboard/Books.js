import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import axios from "axios";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get("https://jsonblob.com/api/jsonBlob/977281105661280256");
        let booksData = res.data;
        console.log(booksData);
        setBooks(booksData);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Grid
        container
        rowSpacing={1} 
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        {books.map((data) => {
            return (
          <Grid item key={data.id}>
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                component="img"
                alt={data.title}
                height="140"
                image={data.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
            )
        })}
      </Grid>
    </>
  );
}

export default Books;

{
  /* 
            https://jsonblob.com/api/jsonBlob/977291969441316864*/
}