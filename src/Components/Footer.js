import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: 'grey',
    padding: '50px 0',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant='h6' align='center' gutterBottom>
        Franklin Sahlhoff | Jack Kelling
      </Typography>
      <Typography variant='subtitle1' align='center' color='textSecondary'>
        LINKS TO SOCIAL MEDIA
      </Typography>
    </footer>
  );
};

export default Footer;
