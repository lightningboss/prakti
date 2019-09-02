import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { praktiMachine, getActionText } from './lib/stateMachine';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}));

const getPossibleNextActions = currentStateId =>
    Object.keys(praktiMachine.states[currentStateId].on);

const ButtonGroup = ({ currentState, onAction }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                minHeight={200}
            >
                {getPossibleNextActions(currentState).map(action => (
                    <MButton key={action} onClick={() => onAction(action)}>
                        {getActionText(action)}
                    </MButton>
                ))}
            </Box>
        </Paper>
    );
};

const MButton = ({ children, onClick }) => (
    <Box m={1} width={1}>
        <Button variant="contained" size="large" color="primary" fullWidth onClick={onClick}>
            {children}
        </Button>
    </Box>
);

export default ButtonGroup;
