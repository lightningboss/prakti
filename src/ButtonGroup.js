import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { getCurrentStateName, getPossibleNextActions } from './lib/stateMachine';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        flexGrow: 1,
    },
}));

const ButtonGroup = ({ currentState, onAction }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Box mb={1}>
                <Typography variant="h5" component="h3">
                    {getCurrentStateName(currentState)}
                </Typography>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                {getPossibleNextActions(currentState).map(({ actionId, actionText }) => (
                    <MButton key={actionId} onClick={() => onAction(actionId)}>
                        {actionText}
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
