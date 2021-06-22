import React, { useEffect, useState } from 'react';
import { Button, Grid, Typography, Container } from '@material-ui/core';
import useStyles from './styles';
import axios from 'axios';

// components
import Cards from './Cards';

const AlbumContainer = () => {
  const classes = useStyles();
  const [images, setImages] = useState([]);

  // useEffect(() => {
  //   const apiRoot = 'http://api.lomography.com/v1/photos';
  //   const accessKey = 'be04771b06adeafc69e3c995586c5f';

  //   axios
  //     .get(`${apiRoot}/popular?page=2&api_key=${accessKey}`)
  //     .then((res) => setImages([...images, ...res.data.photos]));
  // }, []);

  return (
    <div className={classes.container}>
      <Container maxWidth='sm'>
        <Typography
          variant='h2'
          align='center'
          color='textPrimary'
          gutterBottom
        >
          film gallery
        </Typography>
        <Typography variant='h5' align='center' color='textSecondary' paragraph>
          Our great community members have uploaded 15,774,435 photos so far.
          Browse all of them below or filter by tags, countries, cities, cameras
          or films. Be a part of it and add your photos as well!
        </Typography>
        <div className={classes.buttons}>
          <Grid container spacing={2} justify='center'>
            <Grid item>
              <Button variant='contained' color='primary'>
                Gallery
              </Button>
            </Grid>
            <Grid item>
              <Button variant='outlined' color='primary'>
                Details
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
      <Cards images={images} results={images.id} />
    </div>
  );
};
export default AlbumContainer;
