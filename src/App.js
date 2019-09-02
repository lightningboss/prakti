import React from 'react';
import PageWrapper from './PageWrapper';
import ButtonGroup from './ButtonGroup';

const currentState = 'firstStudentRaisedHand';
const onAction = console.log;

const App = () => (
    <PageWrapper>
        <ButtonGroup currentState={currentState} onAction={onAction} />
    </PageWrapper>
);

export default App;
