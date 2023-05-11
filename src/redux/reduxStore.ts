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

const reducers = combineReducers({
    profile: profileReducer,
    messages: messagesReducer
});

type ReducersType = typeof reducers;
export type StateType = ReturnType<ReducersType>

const store: Store<StateType, ActionsTypes> = createStore(reducers);

export default store;