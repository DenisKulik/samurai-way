import { combineReducers, createStore, Store } from 'redux';
import profileReducer, {
    addPostActionCreator, updateNewPostTextActionCreator
} from './profileReducer';
import messagesReducer, {
    addMessageActionCreator, updateNewMessageActionCreator
} from './messagesReducer';

export type ActionsTypes = ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof updateNewMessageActionCreator>
    | ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>

const rootReducer = combineReducers({
    profile: profileReducer,
    messages: messagesReducer
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>
export type StoreType = Store<AppStateType, ActionsTypes>

const store: StoreType = createStore(rootReducer);

export default store;