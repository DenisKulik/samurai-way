import {
    AnyAction, applyMiddleware, combineReducers, createStore, Store
} from 'redux';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { profileReducer, ProfileActionsType } from './profileReducer';
import messagesReducer, { addMessage } from './messagesReducer';
import {
    usersReducer, follow, setCurrentPage, setTotalUsersCount, setUsers,
    toggleIsFetching, toggleIsFollowingProgress, unfollow
} from './usersReducer';
import { authReducer, setUserData } from './authReducer';

export type AppActionsType =
    | ProfileActionsType
    | ReturnType<typeof addMessage>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserData>
    | ReturnType<typeof toggleIsFollowingProgress>


const rootReducer = combineReducers({
    profilePage: profileReducer,
    messages: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

const store: StoreType = createStore(rootReducer,
    applyMiddleware(thunkMiddleware));

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>
export type StoreType = Store<AppStateType, AppActionsType | AnyAction>
export type AppThunkType<ReturnType = void> = ThunkAction<
    ReturnType,
    AppStateType,
    unknown,
    AppActionsType
>

export default store;