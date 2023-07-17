import { AppActionsType } from './reduxStore';

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
    ]
};

const messagesReducer = (
    state: InitialMessagesStateType = initialState, action: AppActionsType
): InitialMessagesStateType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: action.message,
            };
            return {
                ...state,
                messagesData: [ ...state.messagesData, newMessage ],
            };
        default:
            return state;
    }
};

export default messagesReducer;

// actions
export const addMessage = (message: string) => ({
    type: 'ADD-MESSAGE',
    message
} as const);

// types
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
}