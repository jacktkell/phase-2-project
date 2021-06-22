import React from 'react';
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

const Cards = ({ images, results }) => {
  const classes = useStyles();
  return (
    <div>
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
                  <Typography>{image.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button size='small' color='primary'>
                    enlarge
                  </Button>
                  <Button size='small' color='primary'>
                    details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Cards;
