import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';

// eslint-disable-next-line import/prefer-default-export
export const theme = createMuiTheme({
    palette: {
        primary: red,
        secondary: blue,
    },
});
