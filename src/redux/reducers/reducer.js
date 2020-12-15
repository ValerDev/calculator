import { createReducer } from '../createReducer';
import { OPERATIONS } from '../actiontypes';

const { PLUS } = OPERATIONS;

const plus = createReducer(false, (state, { value }) => {
    return {
        [ PLUS ]: value,
    };
});

export default {
    plus,
};