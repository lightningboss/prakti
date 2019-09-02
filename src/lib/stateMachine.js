import { Machine } from 'xstate';

const NEW_QUESTION_ASKED = 'NEW_QUESTION_ASKED';
const TEACHER_STARTED_REACTING = 'TEACHER_STARTED_REACTING';
const FIRST_STUDENT_RAISED_HAND = 'FIRST_STUDENT_RAISED_HAND';
const FIRST_STUDENT_ANSWERED_QUESTION = 'FIRST_STUDENT_ANSWERED_QUESTION';
const SOME_STUDENT_ANSWERED_QUESTION = 'SOME_STUDENT_ANSWERED_QUESTION';
const TEACHER_MOTIVATED = 'TEACHER_MOTIVATED';
const TEACHER_ASKED_NEW_QUESTION = 'TEACHER_POSED_NEW_QUESTION';
const TEACHER_SIMPLIFIED_QUESTION = 'TEACHER_SIMPLIFIED_QUESTION';
const TEACHER_CANCELED_QUESTION = 'TEACHER_CANCELED_QUESTION';
const TEACHER_ANSWERED_QUESTION = 'TEACHER_ANSWERED_QUESTION';
const TEACHER_REACTED_UNEXPECTEDLY = 'TEACHER_REACTED_UNEXPECTEDLY';

const actionStrings = {
    [NEW_QUESTION_ASKED]: 'Neue Frage gestellt',
    [TEACHER_STARTED_REACTING]: 'Lehrer reagiert',
    [FIRST_STUDENT_RAISED_HAND]: '1. Schüler meldet sich',
    [FIRST_STUDENT_ANSWERED_QUESTION]: '1. Schüler antwortet',
    [SOME_STUDENT_ANSWERED_QUESTION]: 'n. Schüler antwortet, n > 1',
    [TEACHER_MOTIVATED]: 'Motiviert Klasse',
    [TEACHER_ASKED_NEW_QUESTION]: 'Stellt neue Frage',
    [TEACHER_SIMPLIFIED_QUESTION]: 'Vereinfacht Frage',
    [TEACHER_CANCELED_QUESTION]: 'Bricht ab',
    [TEACHER_ANSWERED_QUESTION]: 'Beantwortet selbst',
    [TEACHER_REACTED_UNEXPECTEDLY]: 'Unerwartete Reaktion',
};

export const getPossibleNextActions = currentStateId =>
    Object.keys(praktiMachine.states[currentStateId].on).map(nextStateId => ({
        actionId: nextStateId,
        actionText: actionStrings[nextStateId],
    }));

export const praktiMachine = Machine({
    id: 'prakti',
    initial: 'questionFinished',
    states: {
        questionFinished: {
            on: {
                [NEW_QUESTION_ASKED]: 'newQuestionAsked',
            },
        },
        newQuestionAsked: {
            on: {
                [TEACHER_STARTED_REACTING]: 'teacherStartedReacting',
                [FIRST_STUDENT_RAISED_HAND]: 'firstStudentRaisedHand',
            },
        },
        teacherStartedReacting: {
            on: {
                [TEACHER_MOTIVATED]: 'newQuestionAsked',
                [TEACHER_ASKED_NEW_QUESTION]: 'newQuestionAsked',
                [TEACHER_SIMPLIFIED_QUESTION]: 'newQuestionAsked',
                [TEACHER_CANCELED_QUESTION]: 'questionFinished',
                [TEACHER_ANSWERED_QUESTION]: 'questionFinished',
                [TEACHER_REACTED_UNEXPECTEDLY]: 'questionFinished',
            },
        },
        firstStudentRaisedHand: {
            on: {
                [TEACHER_STARTED_REACTING]: 'teacherStartedReacting',
                [FIRST_STUDENT_ANSWERED_QUESTION]: 'questionFinished',
                [SOME_STUDENT_ANSWERED_QUESTION]: 'questionFinished',
            },
        },
    },
});

window.prakti = praktiMachine;
