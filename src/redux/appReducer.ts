import { AppThunkDispatch, AppThunkType } from './reduxStore';
import { getAuthUser } from './authReducer';

const initialState = {
    initialized: false
};

export const appReducer = (
    state = initialState, action: AppActionsType
): InitialAppStateType => {
    switch (action.type) {
        case 'SET-INITIALIZED-SUCCESS':
            return { ...state, initialized: true };
        default:
            return state;
    }
};

// actions
const setInitializedSuccess = () => ({ type: 'SET-INITIALIZED-SUCCESS' } as const);

// thunks
export const initializeApp = (): AppThunkType => async (dispatch: AppThunkDispatch) => {
    try {
        await dispatch(getAuthUser());
        dispatch(setInitializedSuccess());
    } catch (e) {
        console.error(e);
    }
};

// types
type InitialAppStateType = typeof initialState
export type AppActionsType = ReturnType<typeof setInitializedSuccess>