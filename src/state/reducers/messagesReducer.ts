const initialState = {
    dialogsList: [
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

export const messagesReducer = (
    state: InitialMessagesStateType = initialState,
    action: MessagesActionsType,
): InitialMessagesStateType => {
    switch (action.type) {
        case 'MESSAGES/ADD-MESSAGE':
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

// actions
export const addMessage = (message: string) => ({ type: 'MESSAGES/ADD-MESSAGE', message }) as const

// types
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type InitialMessagesStateType = typeof initialState
export type MessagesActionsType = ReturnType<typeof addMessage>
