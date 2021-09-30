import produce from 'immer';
import { REGISTER, REGISTER_DONE, REGISTER_ERRORS } from './constants';

export const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false
};

const registerReducer = (state = initialState, action) => produce(state, draft => {
    switch (action.type) {
        case REGISTER:
            draft.isLoading = true;
            draft.isError = false;
            draft.isSuccess= false;
            return draft;

        case REGISTER_DONE:
            draft.isLoading = false;
            draft.isError = false;
            draft.isSuccess= true;
            return draft

        case REGISTER_ERRORS:
            draft.isLoading = false;
            draft.isError = true;
            draft.isSuccess= false;
            return draft
    }
});

export default registerReducer;