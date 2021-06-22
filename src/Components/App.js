import React from 'react';

// dependencies
import { Typography } from '@material-ui/core';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';

// components to import
import useStyles from './styles';
import Nav from './Nav';
// import AlbumContainer from './AlbumContainer';

const App = () => {
  const classes = useStyles();

  return (
    <>
      <ScopedCssBaseline>
        <Nav />

        <footer className={classes.footer}>
          <Typography variant='h6' align='center' gutterBottom>
            Dev | Franklin Sahlhoff | Jack Kelling
          </Typography>
          <Typography variant='subtitle1' align='center' color='textSecondary'>
            LINKS TO SOCIAL MEDIA
          </Typography>
        </footer>
      </ScopedCssBaseline>
    </>
  );
};

export default App;
