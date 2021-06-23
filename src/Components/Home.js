import { Button, Grid, Typography, Container } from '@material-ui/core';
import useStyles from './styles';

// components
const Home = () => {
  const classes = useStyles();

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
        {/* <div className={classes.buttons}>
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
        </div> */}
      </Container>
    </div>
  );
};
export default Home;
