import React from 'react';
import { useEffect, useState } from 'react';
// dependencies

import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';

import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components to import
import useStyles from './styles';
import Nav from './Nav';
import Home from './Home';
import Login from './Login';
import Details from './pages/Details';
import Gallery from './Gallery';
import Footer from './Footer';

const App = () => {
  const classes = useStyles();

  // state
  const [images, setImages] = useState([]);

  useEffect(() => {
    const apiRoot = 'http://api.lomography.com/v1/photos';
    const accessKey = 'be04771b06adeafc69e3c995586c5f';

    axios
      .get(`${apiRoot}/popular?page=2&api_key=${accessKey}`)
      .then((res) => setImages([...images, ...res.data.photos]));
  }, []);

  return (
    <>
      <ScopedCssBaseline>
        <div className={classes.rootApp}>
          <Router>
            <Route
              path='/details/:id'
              render={(props) => {
                const imageId = props.match.params.id;
                const detailImg = images.find((element) => {
                  return element.id == imageId;
                });

                return <Details detailImg={detailImg} />;
              }}
              strict
            ></Route>
            <Nav />
            <Switch>
              <Route path='/home' component={Home} strict />
              <Route path='/gallery' component={Gallery} strict>
                <Gallery images={images} results={images.id} key={images.id} />
              </Route>
              <Route path='/login' component={Login} strict />
            </Switch>
          </Router>
        </div>
        <Footer />
      </ScopedCssBaseline>
    </>
  );
};

export default App;
