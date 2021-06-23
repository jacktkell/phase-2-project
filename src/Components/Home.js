import { Button, Grid, Typography, Container } from '@material-ui/core';
import useStyles from './styles';
import { CssBaseline } from '@material-ui/core';

// components
const Home = () => {
  const classes = useStyles();

  return (
    <CssBaseline>
      <div className={classes.container}>
        <Container maxWidth='sm' component='main'>
          <Typography
            variant='h2'
            align='center'
            color='secondary'
            gutterBottom
          >
            amet ~ a collective
          </Typography>
          <Typography variant='h5' align='center' color='secondary' paragraph>
            Our great community members have uploaded 15,774,435 photos so far.
            Browse all of them below or filter by tags, countries, cities,
            cameras or films. Be a part of it and add your photos as well!
          </Typography>
        </Container>
      </div>
    </CssBaseline>
  );
};
export default Home;
