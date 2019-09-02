import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import PageWrapper from './PageWrapper';
import ButtonGroup from './components/ButtonGroup';
import LogTable from './components/LogTable';
import Settings from './components/Settings';

import { praktiMachine } from './lib/stateMachine';

let id = 0;

const App = () => {
    const [shouldOpenSettings, setShouldOpenSettings] = useState(false);
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
        <PageWrapper onOpenSettings={() => setShouldOpenSettings(true)}>
            <Box display="flex" flexDirection="column" height={0.9}>
                <ButtonGroup currentState={currentState} onAction={onAction} />
                <LogTable log={log} />
                <Settings
                    open={shouldOpenSettings}
                    handleClose={() => setShouldOpenSettings(false)}
                />
            </Box>
        </PageWrapper>
    );
};

export default App;
