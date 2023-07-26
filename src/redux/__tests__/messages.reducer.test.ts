import { messagesReducer, addMessage, InitialMessagesStateType } from 'redux/messagesReducer'

describe('messages-reducer', () => {
    let initialState: InitialMessagesStateType

    beforeEach(() => {
        initialState = {
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
    })

    it('should add a new message to the state correctly', () => {
        const newMessage = 'Hello, world!'
        const action = addMessage(newMessage)
        const newState = messagesReducer(initialState, action)

        expect(newState.messagesData.length).toBe(5)
        expect(newState.messagesData[4].message).toBe(newMessage)
    })
})
