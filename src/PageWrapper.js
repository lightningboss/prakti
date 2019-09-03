import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { makeStyles } from '@material-ui/core/styles';

import { theme } from './theme';

const useStyles = makeStyles({
    title: {
        flexGrow: 1,
    },
});

const PageWrapper = ({ children, exportData, setSubject, resetData }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Prakti
                    </Typography>
                    <IconButton onClick={handleMenu} color="inherit">
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem
                            onClick={() => {
                                handleClose();
                                setSubject();
                            }}
                        >
                            Fach wechseln
                        </MenuItem>
                        <MenuItem
                            onClick={() => {
                                handleClose();
                                exportData();
                            }}
                        >
                            Exportieren
                        </MenuItem>
                        <MenuItem
                            onClick={() => {
                                handleClose();
                                resetData();
                            }}
                        >
                            Reset
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
            <Box mt={9}>
                <Container maxWidth="sm">{children}</Container>
            </Box>
        </ThemeProvider>
    );
};

export default PageWrapper;
