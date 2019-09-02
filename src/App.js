import React, { useState } from 'react';
import PageWrapper from './PageWrapper';
import ButtonGroup from './ButtonGroup';

import { praktiMachine } from './lib/stateMachine';

const App = () => {
    const [currentState, setNextState] = useState(praktiMachine.initial);
    const onAction = actionId => {
        const nextState = praktiMachine.transition(currentState, actionId);
        setNextState(nextState.value);
    };

    return (
        <PageWrapper>
            <ButtonGroup currentState={currentState} onAction={onAction} />
        </PageWrapper>
    );
};

export default App;
