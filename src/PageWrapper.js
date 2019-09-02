import React from 'react';
import { AppBar, Box, CssBaseline, Typography, Toolbar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

const PageWrapper = ({ children }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Prakti
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box m={2}>{children}</Box>
        </div>
    );
};

export default PageWrapper;
