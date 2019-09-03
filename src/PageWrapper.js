import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';

import { theme } from './theme';

const useStyles = makeStyles({
    title: {
        flexGrow: 1,
    },
});
const PageWrapper = ({ children, onOpenSettings }) => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Prakti
                    </Typography>
                    <IconButton onClick={onOpenSettings} color="inherit">
                        <MoreVertIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box mt={9}>
                <Container maxWidth="sm">{children}</Container>
            </Box>
        </ThemeProvider>
    );
};

export default PageWrapper;
