import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";

import useStyles from "./Styles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Cards() {
    const classes = useStyles();
  return (
    <div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid key={card} xs={12} sm={6} md={4} item>
              <Card className={classes.cardGrid} maxwidth="md">
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card you can use this section to describe
                    content
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    view
                  </Button>
                  <Button size="small" color="primary">
                    edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
