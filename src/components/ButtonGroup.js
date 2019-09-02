import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import ButtonWithSpacing from './ButtonWithSpacing';

import { getCurrentStateName, getPossibleNextActions } from '../lib/stateMachine';

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
                    <ButtonWithSpacing key={actionId} onClick={() => onAction(actionId)}>
                        {actionText}
                    </ButtonWithSpacing>
                ))}
            </Box>
        </Paper>
    );
};

export default ButtonGroup;
