import React from 'react';
import { AppBar, Box, CssBaseline, Typography, Toolbar } from '@material-ui/core';

const PageWrapper = ({ children }) => {
    return (
        <>
            <CssBaseline />
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6">Prakti</Typography>
                </Toolbar>
            </AppBar>
            <Box mt={9} m={2} height={1}>
                {children}
            </Box>
        </>
    );
};

export default PageWrapper;
