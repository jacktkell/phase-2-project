import React from "react";
import { Button, Grid, Typography, Container } from "@material-ui/core";

import useStyles from "./Styles";
import Cards from "./Cards";

export default function AlbumContainer() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <Container maxWidth="sm">
          <Typography
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Photo Album
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Hello everyone this is a ohoto album and im trying to make this
            sentence as long as wposible so we can see hwat it looks like on the
            screen
          </Typography>
          <div className={classes.buttons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  See my button
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Secondary Action
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
        <Cards />
      </div>
    </div>
  );
}
