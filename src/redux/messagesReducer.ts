import { ActionsTypes, MessagesType, MessageType, } from './state';

type ADD_MESSAGE_TYPE = 'ADD-MESSAGE';
type UPDATE_NEW_MESSAGE_TYPE = 'UPDATE-NEW-MESSAGE';

const ADD_MESSAGE: ADD_MESSAGE_TYPE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE: UPDATE_NEW_MESSAGE_TYPE = 'UPDATE-NEW-MESSAGE';
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE } as const);
export const updateNewMessageActionCreator = (message: string) =>
    ({ type: UPDATE_NEW_MESSAGE, message } as const);

const messagesReducer = (state: MessagesType,
                         action: ActionsTypes): MessagesType => {
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