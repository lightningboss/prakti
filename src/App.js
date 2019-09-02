import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';
import PageWrapper from './PageWrapper';
import ButtonGroup from './ButtonGroup';

import { praktiMachine } from './lib/stateMachine';

let id = 0;

const useStyles = makeStyles({
    overflowScroll: {
        overflowX: 'scroll',
    },
});
const App = () => {
    const [currentState, setNextState] = useState(praktiMachine.initial);
    const [log, setLog] = useState(() => [
        {
            id: id++,
            time: Date.now(),
            currentState,
            action: 'NONE',
        },
    ]);

    const onAction = actionId => {
        const { value: nextState } = praktiMachine.transition(currentState, actionId);
        setLog([
            {
                id: id++,
                time: Date.now(),
                action: actionId,
                currentState,
                nextState,
            },
            ...log,
        ]);
        setNextState(nextState);
    };

    const classes = useStyles();

    return (
        <PageWrapper>
            <Box display="flex" flexDirection="column">
                <Box flexGrow={1} height={150} className={classes.overflowScroll}>
                    {log.map(entry => (
                        <p key={entry.id}>{entry.action}</p>
                    ))}
                </Box>
                <ButtonGroup currentState={currentState} onAction={onAction} />
            </Box>
        </PageWrapper>
    );
};

export default App;
