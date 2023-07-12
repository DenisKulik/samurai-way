import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import {
    profileReducer, addPost, updateNewPostText, setUserProfile, setUserStatus
} from './profileReducer';
import messagesReducer, {
    addMessageActionCreator, updateNewMessageActionCreator
} from './messagesReducer';
import {
    usersReducer, follow, setCurrentPage, setTotalUsersCount, setUsers,
    toggleIsFetching, toggleIsFollowingProgress, unfollow
} from './usersReducer';
import { authReducer, setUserData } from './authReducer';

export type AppActionsType =
    | ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof updateNewMessageActionCreator>
    | ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserData>
    | ReturnType<typeof toggleIsFollowingProgress>
    | ReturnType<typeof setUserStatus>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    messages: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer
});

const store: StoreType = createStore(rootReducer,
    applyMiddleware(thunkMiddleware));

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>
export type StoreType = Store<AppStateType, AppActionsType>
export type AppThunkType<ReturnType = void> = ThunkAction<
    ReturnType,
    AppStateType,
    unknown,
    AppActionsType
>

export default store;