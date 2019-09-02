import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import PageWrapper from './PageWrapper';
import ButtonGroup from './components/ButtonGroup';
import LogTable from './components/LogTable';
import Settings from './components/Settings';

import { praktiMachine } from './lib/stateMachine';
import { persistData, getInitialData } from './lib/persistence';

const defaultLog = [
    {
        id: 0,
        time: Date.now(),
        currentState: praktiMachine.initial,
        action: 'NONE',
    },
];

const App = () => {
    const [currentId, setId] = useState(
        () => Math.max(0, ...getInitialData().map(obj => obj.id)) + 1,
    );
    const getNewId = () => {
        const id = currentId;
        setId(currentId + 1);
        return id;
    };

    const [shouldOpenSettings, setShouldOpenSettings] = useState(false);
    const [currentState, setNextState] = useState(() => {
        const lastState = getInitialData()[0];
        if (lastState) {
            return praktiMachine.transition(lastState.currentState, lastState.action).value;
        }

        return praktiMachine.initial;
    });
    const [log, setLog] = useState(() => getInitialData() || defaultLog);

    const onAction = actionId => {
        const { value: nextState } = praktiMachine.transition(currentState, actionId);
        const newLog = [
            {
                id: getNewId(),
                time: Date.now(),
                action: actionId,
                currentState,
                nextState,
            },
            ...log,
        ];
        setLog(newLog);
        setNextState(nextState);
        persistData(newLog);
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
