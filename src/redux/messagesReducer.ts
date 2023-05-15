import { ActionsTypes } from './reduxStore';

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type InitialMessagesStateType = {
    dialogsData: DialogType[]
    messagesData: MessageType[]
    newMessageText: string
}

type ADD_MESSAGE_TYPE = 'ADD-MESSAGE';
type UPDATE_NEW_MESSAGE_TYPE = 'UPDATE-NEW-MESSAGE';

const initialState: InitialMessagesStateType = {
    dialogsData: [
        { id: 1, name: 'William' },
        { id: 2, name: 'Emma' },
        { id: 3, name: 'James' },
        { id: 4, name: 'Addison' },
        { id: 5, name: 'Ethan' },
        { id: 6, name: 'Hailey' },
    ],
    messagesData: [
        {
            id: 1,
            message: 'Hey, any advice for someone starting to learn programming?'
        },
        {
            id: 2,
            message: 'Sure! Start with a beginner-friendly language like JavaScript, and practice coding every day.'
        },
        {
            id: 3,
            message: 'Got it. Any specific resources you recommend?'
        },
        {
            id: 4,
            message: 'Codecademy and Udemy have great courses, and there are tons of coding blogs and YouTube tutorials out there too.'
        },
    ],
    newMessageText: '',
};

const ADD_MESSAGE: ADD_MESSAGE_TYPE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE: UPDATE_NEW_MESSAGE_TYPE = 'UPDATE-NEW-MESSAGE';
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE } as const);
export const updateNewMessageActionCreator = (message: string) =>
    ({ type: UPDATE_NEW_MESSAGE, message } as const);

const messagesReducer = (
    state: InitialMessagesStateType = initialState, action: ActionsTypes
): InitialMessagesStateType => {
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