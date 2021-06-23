import React from 'react';
import { useEffect, useState } from 'react';
// dependencies
import { Typography } from '@material-ui/core';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';

import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// components to import
import useStyles from './styles';
import Nav from './Nav';
import Home from './Home';
import Login from './Login';
import Gallery from './Gallery';

const App = () => {
  const classes = useStyles();

  const [images, setImages] = useState([]);

  useEffect(() => {
    const apiRoot = 'http://api.lomography.com/v1/photos';
    const accessKey = 'be04771b06adeafc69e3c995586c5f';

    axios
      .get(`${apiRoot}/popular?page=2&api_key=${accessKey}`)
      .then((res) => setImages([...images, ...res.data.photos]));
  }, []);

  return (
    <ScopedCssBaseline>
      <div className={classes.rootApp}>
        <Router>
          <Nav />
          <Switch>
            <Route path='/home' component={Home} strict />
            <Route path='/gallery' component={Gallery} strict>
              <Gallery images={images} results={images.id} key={images.id} />
            </Route>
            <Route path='/login' component={Login} strict />
          </Switch>
        </Router>

        <footer className={classes.footer}>
          <Typography variant='h6' align='center' gutterBottom>
            Franklin Sahlhoff | Jack Kelling
          </Typography>
          <Typography variant='subtitle1' align='center' color='textSecondary'>
            LINKS TO SOCIAL MEDIA
          </Typography>
        </footer>
      </div>
    </ScopedCssBaseline>
  );
};

export default App;
