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
        { id: 1, message: 'Any advice for a programming beginner?' },
        { id: 2, message: 'Start with JavaScript and code every day.' },
        { id: 3, message: 'Any recommended resources?' },
        { id: 4, message: 'Udemy and YouTube tutorials are great resources.' },
    ],
}

const messagesReducer = (
    state: InitialMessagesStateType = initialState,
    action: MessagesActionsType,
): InitialMessagesStateType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: action.message,
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
            }
        default:
            return state
    }
}

export default messagesReducer

// actions
export const addMessage = (message: string) =>
    ({
        type: 'ADD-MESSAGE',
        message,
    }) as const

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

export type MessagesActionsType = ReturnType<typeof addMessage>
