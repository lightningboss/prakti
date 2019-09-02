import React from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import ButtonWithSpacing from './ButtonWithSpacing';
const Settings = ({ children, open, handleClose }) => {
    return (
        <Dialog open={open} onClose={handleClose} fullScreen>
            <DialogTitle id="form-dialog-title">Einstellungen</DialogTitle>
            <DialogContent>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                >
                    <ButtonWithSpacing onClick={console.log}>Exportieren</ButtonWithSpacing>
                    <ButtonWithSpacing onClick={console.log}>Fach wechseln</ButtonWithSpacing>
                    <ButtonWithSpacing onClick={console.log}>Reset</ButtonWithSpacing>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
};

export default Settings;
