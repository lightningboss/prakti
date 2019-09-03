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
    defaultLog,
} from './lib/persistence';

const App = () => {
    const [currentId, setId] = useState(
        () => Math.max(0, ...getInitialData().map(obj => obj.id)) + 1,
    );
    const getNewId = () => {
        const id = currentId;
        setId(currentId + 1);
        return id;
    };

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

    const [{ nextState: currentState }] = log;

    const onAction = actionId => {
        const { value: nextState } = praktiMachine.transition(currentState, actionId);
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
