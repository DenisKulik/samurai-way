import { combineReducers, createStore, Store } from 'redux';
import profileReducer, {
    addPost, updateNewPostText, setUserProfile
} from './profileReducer';
import messagesReducer, {
    addMessageActionCreator, updateNewMessageActionCreator
} from './messagesReducer';
import usersReducer, {
    followUser, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching,
    unfollowUser
} from './usersReducer';

export type ActionsTypes = ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof updateNewMessageActionCreator>
    | ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof followUser>
    | ReturnType<typeof unfollowUser>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    messages: messagesReducer,
    usersPage: usersReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>
export type StoreType = Store<AppStateType, ActionsTypes>

const store: StoreType = createStore(rootReducer);

export default store;