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
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { makeStyles } from '@material-ui/core/styles';

import { theme } from './theme';

const useStyles = makeStyles({
    title: {
        flexGrow: 1,
    },
    aboveAppBar: {
        top: 0,
        position: 'fixed',
        backgroundColor: theme.palette.primary.dark,
        zIndex: theme.zIndex.appBar + 1,
    },
    appBar: {
        marginTop: 20,
    },
});

const PageWrapper = ({
    children,
    exportData,
    setSubject,
    resetData,
    undo,
    redo,
    canUndo,
    canRedo,
    refreshApp,
}) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const enabledAboveAppBar = matchMedia('(display-mode: standalone)').matches;
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {enabledAboveAppBar && <Box height={20} width={1} className={classes.aboveAppBar} />}
            <AppBar position="fixed" className={enabledAboveAppBar ? classes.appBar : ''}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Prakti
                    </Typography>
                    <IconButton onClick={undo} color="inherit" disabled={!canUndo}>
                        <UndoIcon />
                    </IconButton>
                    <IconButton onClick={redo} color="inherit" disabled={!canRedo}>
                        <RedoIcon />
                    </IconButton>
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
                                refreshApp();
                            }}
                        >
                            App refreshen
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
            <Box mt={11}>
                <Container maxWidth="sm">{children}</Container>
            </Box>
        </ThemeProvider>
    );
};

export default PageWrapper;
