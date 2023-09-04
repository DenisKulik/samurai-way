import { applyMiddleware, combineReducers, compose, createStore, Store } from 'redux'
import thunkMiddleware, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { reducer as formReducer, FormAction } from 'redux-form'

import { profileReducer, ProfileActionsType } from 'state/reducers/profileReducer'
import { messagesReducer, MessagesActionsType } from 'state/reducers/messagesReducer'
import { usersReducer, UsersActionsType } from 'state/reducers/usersReducer'
import { AuthActionsType, authReducer } from 'state/reducers/authReducer'
import { AppActionsType, appReducer } from 'state/reducers/appReducer'

const rootReducer = combineReducers({
    app: appReducer,
    profile: profileReducer,
    messages: messagesReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer,
})
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store: StoreType = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware)),
)

// types
export type RootActionsType =
    | AppActionsType
    | ProfileActionsType
    | MessagesActionsType
    | UsersActionsType
    | AuthActionsType
    | FormAction
type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
export type StoreType = Store<AppStateType, RootActionsType>
export type AppThunkDispatch = ThunkDispatch<AppStateType, any, RootActionsType>
export type AppThunkType<ReturnType = void> = ThunkAction<
    ReturnType,
    AppStateType,
    unknown,
    RootActionsType
>
