import { ActionType, MessagesType, MessageType, } from './state';

type ADD_MESSAGE_TYPE = 'ADD-MESSAGE';
type UPDATE_NEW_MESSAGE_TYPE = 'UPDATE-NEW-MESSAGE';
type addMessageActionType = { type: ADD_MESSAGE_TYPE }
type updateNewMessageActionType = {
    type: UPDATE_NEW_MESSAGE_TYPE,
    message: string
}

const ADD_MESSAGE: ADD_MESSAGE_TYPE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE: UPDATE_NEW_MESSAGE_TYPE = 'UPDATE-NEW-MESSAGE';
export const addMessageActionCreator = (): addMessageActionType => ({ type: ADD_MESSAGE });
export const updateNewMessageActionCreator = (message: string): updateNewMessageActionType =>
    ({ type: UPDATE_NEW_MESSAGE, message });

const messagesReducer = (state: MessagesType,
                         action: ActionType): MessagesType => {
    switch (action.type) {
        case ADD_MESSAGE:
            if (!state.newMessageText.trim()) return state;
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: state.newMessageText,
            };
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            break;
        case UPDATE_NEW_MESSAGE:
            if (action.message) state.newMessageText = action.message;
            break;
    }

    return state;
};

export default messagesReducer;