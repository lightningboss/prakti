import React from 'react';
import { AppBar, Box, CssBaseline, Typography, Toolbar } from '@material-ui/core';

const PageWrapper = ({ children }) => {
    return (
        <>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">Prakti</Typography>
                </Toolbar>
            </AppBar>
            <Box m={2}>{children}</Box>
        </>
    );
};

export default PageWrapper;
