import React, { useState, useEffect } from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import axios from 'axios';

function Books() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          let res = await axios.get("http://jsonblob.com/977061631976816640");
          let booksData = res.data;
          console.log(booksData);
          setBooks(booksData);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }, []);

    return (
        <>
            <Grid  
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            >
                {books.map(data => {
                <Grid item key={data.id}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
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
                })}
            </Grid>
        </>
    )
}

export default Books;