import React, { useState } from 'react';
import useStyles from './styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
} from '@material-ui/core';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// components
import Details from './pages/Details';

const Gallery = ({ images, results, key }) => {
  const classes = useStyles();

  const routes = [`'/details/:id'`];

  console.log(images);

  return (
    <>
      <Container className={classes.cardGrid} maxWidth='md'>
        <Grid container spacing={4}>
          {images.map((image) => (
            <Grid results={results} key={image.id} xs={12} sm={6} md={4} item>
              <Card className={classes.cardGrid} maxwidth='md'>
                <CardMedia
                  className={classes.cardMedia}
                  image={image.assets.large.url}
                  title='Image title'
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant='h5'></Typography>
                  <Typography></Typography>
                </CardContent>

                <CardActions>
                  <Route path='/'>
                    <Button size='small' color='primary'>
                      enlarge
                    </Button>
                    <Button
                      size='small'
                      color='primary'
                      value={routes[0]}
                      to={routes[0]}
                      component={Link}
                    >
                      details
                    </Button>
                  </Route>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Gallery;
