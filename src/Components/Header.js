import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import { PhotoCamera } from "@material-ui/icons";

import useStyles from "./Styles";

export default function Header() {
  const classes = { useStyles };
  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
        {""}
      </AppBar>
    </div>
  );
}
