import { createMuiTheme } from '@material-ui/core';
import { yellow, grey } from '@material-ui/core/colors';

const Theme = createMuiTheme({
  pallet: {
    primary: {
      main: yellow[400],
    },
    secondary: {
      main: grey[900],
      contrastText: yellow[300],
    },
  },
});

export default Theme;
