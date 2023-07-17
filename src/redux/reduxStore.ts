import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import { reducer as formReducer, FormAction } from 'redux-form';
import { profileReducer, ProfileActionsType } from './profileReducer';
import messagesReducer, { MessagesActionsType } from './messagesReducer';
import { usersReducer, UsersActionsType } from './usersReducer';
import { AuthActionsType, authReducer } from './authReducer';

const rootReducer = combineReducers({
    profilePage: profileReducer,
    messages: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

const store: StoreType = createStore(
    rootReducer, applyMiddleware(thunkMiddleware)
);

export default store;

// types
export type AppActionsType =
    | ProfileActionsType
    | MessagesActionsType
    | UsersActionsType
    | AuthActionsType
    | FormAction
type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>
export type StoreType = Store<AppStateType, AppActionsType>
export type AppThunkType<ReturnType = void> = ThunkAction<
    ReturnType,
    AppStateType,
    unknown,
    AppActionsType
>