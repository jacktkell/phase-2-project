import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//component
// import Home from './Home';
import useStyles from './styles';

const Nav = () => {
  const routes = ['/home', '/gallery', '/login'];

  const classes = useStyles();

  return (
    <div className={classes.root2}>
      <Route
        path='/'
        render={(history) => (
          <AppBar className={classes.appbar}>
            <Tabs value={history.location.pathname}>
              <Tab
                label='Home'
                value={routes[0]}
                component={Link}
                to={routes[0]}
              />
              <Tab
                label='Gallery'
                value={routes[1]}
                component={Link}
                to={routes[1]}
              />
              <Tab
                label='Login'
                value={routes[2]}
                component={Link}
                to={routes[2]}
              />
            </Tabs>
          </AppBar>
        )}
      />
    </div>
  );
};

export default Nav;
