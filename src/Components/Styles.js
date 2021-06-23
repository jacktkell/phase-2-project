import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    // backgroundColor: 'black',
    padding: theme.spacing(8, 0, 6),
    // height: '100vh',
    // backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/film.jpeg'})`,
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
  },
  // icon: {
  //   marginRight: '20px',
  // },
  buttons: {
    marginTop: '40px',
  },
  cardGrid: {
    padding: '60px 0',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16.9
  },
  cardContent: {
    flexGrow: '1',
  },
  appbar: {
    backgroundColor: 'black',
  },
  // footer: {
  //   backgroundColor: theme.palette.background.paper,
  //   padding: '50px 0',
  // },
  // root: {
  //   flexGrow: 1,
  //   backgroundColor: theme.palette.background.paper,
  // },
  rootApp: {
    height: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/film.jpeg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

export default useStyles;
