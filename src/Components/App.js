import React from "react";
import { Typography } from "@material-ui/core";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";

// components
import useStyles from "./Styles";
import Header from "./Header";
import AlbumContainer from "./AlbumContainer";

const App = () => {
  const classes = useStyles();

  return (
    <>
      <ScopedCssBaseline>
        {/*  Header */}
        <Header />
        {/* main body render */}
        <main>
          {/* Album Container */}
          <AlbumContainer />
        </main>
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary">
            something to test the footer out
          </Typography>
        </footer>
      </ScopedCssBaseline>
    </>
  );
};
export default App;