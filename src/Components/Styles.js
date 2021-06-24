import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(8, 0, 6),
  },
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
  appBar: {
    backgroundColor: 'black',
  },
  rootApp: {
    height: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/film.jpeg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default useStyles;
