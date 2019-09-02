import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import PageWrapper from './PageWrapper';
import ButtonGroup from './ButtonGroup';
import LogTable from './components/LogTable';

import { praktiMachine } from './lib/stateMachine';

let id = 0;

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

    return (
        <PageWrapper>
            <Box display="flex" flexDirection="column" height={0.9}>
                <ButtonGroup currentState={currentState} onAction={onAction} />
                <LogTable log={log} />
            </Box>
        </PageWrapper>
    );
};

export default App;
