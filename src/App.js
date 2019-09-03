import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import PageWrapper from './PageWrapper';
import ButtonGroup from './components/ButtonGroup';
import LogTable from './components/LogTable';

import { praktiMachine } from './lib/stateMachine';
import {
    persistData,
    getInitialData,
    clearPersistedData,
    getPersistedDataAsString,
} from './lib/persistence';

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

    const [currentState, setNextState] = useState(() => {
        const lastState = getInitialData()[0];
        if (lastState) {
            return praktiMachine.transition(lastState.currentState, lastState.action).value;
        }

        return praktiMachine.initial;
    });
    const [log, setLog] = useState(() => getInitialData() || defaultLog);
    const addToLog = ({ action, currentState, nextState, meta = null }) => {
        const newLog = [
            {
                id: getNewId(),
                time: Date.now(),
                action,
                currentState,
                nextState,
                meta,
            },
            ...log,
        ];
        setLog(newLog);
        persistData(newLog);
    };

    const onAction = actionId => {
        const { value: nextState } = praktiMachine.transition(currentState, actionId);
        setNextState(nextState);
        addToLog({ action: actionId, currentState, nextState });
    };

    return (
        <PageWrapper
            resetData={() => {
                const shouldReset = window.confirm('Are you sure?');
                if (!shouldReset) {
                    return;
                }

                clearPersistedData();
                setNextState(praktiMachine.initial);
                setLog(defaultLog);
                setId(1);
            }}
            exportData={() => {
                window.prompt('Copy to clipboard:', getPersistedDataAsString());
            }}
            setSubject={() => {
                const newSubject = window.prompt('Neues Fach:');
                if (!newSubject) {
                    return;
                }

                addToLog({
                    action: 'NEW_SUBJECT',
                    currentState,
                    nextState: currentState,
                    meta: { newSubject },
                });
            }}
        >
            <Box display="flex" flexDirection="column">
                <ButtonGroup currentState={currentState} onAction={onAction} />
                <LogTable log={log} />
            </Box>
        </PageWrapper>
    );
};

export default App;
