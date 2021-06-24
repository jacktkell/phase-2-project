import React, { useState } from 'react';
import useStyles from './styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Container,
} from '@material-ui/core';

import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// components

const Gallery = ({ images, results, key }) => {
  const classes = useStyles();

  const routes = [`/details/:id`];

  console.log(images);

  return (
    <>
      <ScopedCssBaseline>
        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={1}>
            {images.map((image) => (
              <Grid
                results={results}
                key={image.id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                item
              >
                <Card className={classes.cardGrid} maxwidth='lg'>
                  <CardMedia
                    className={classes.cardMedia}
                    image={image.assets.large.url}
                    title={image.title}
                  />
                  <CardContent className={classes.cardContent}></CardContent>

                  <CardActions>
                    <Route path='/'>
                      <Button
                        size='small'
                        color='primary'
                        value={routes[0]}
                        to={`/details/${image.id}`}
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
      </ScopedCssBaseline>
    </>
  );
};

export default Gallery;
