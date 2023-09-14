import { AppThunkDispatch, AppThunkType } from 'app/model/store'
import { chatAPI, MessageType } from 'features/chat/api/chat.api'

const initialState = {
    messages: [] as MessageType[],
}

export const chatReducer = (
    state: InitialChatStateType = initialState,
    action: ChatActionsType,
): InitialChatStateType => {
    switch (action.type) {
        case 'CHAT/SET-MESSAGES':
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages],
            }
        default:
            return state
    }
}

// utils
let _newMessageHandler: ((messages: MessageType[]) => void) | null = null

const onMessageHandlerCreator = (dispatch: AppThunkDispatch) => {
    if (!_newMessageHandler) {
        _newMessageHandler = (messages: MessageType[]) => {
            dispatch(setMessages(messages))
        }
    }

    return _newMessageHandler
}

// actions
export const setMessages = (messages: MessageType[]) =>
    ({ type: 'CHAT/SET-MESSAGES', payload: { messages } }) as const

// thunks
export const startMessagesListening = (): AppThunkType => async (dispatch: AppThunkDispatch) => {
    chatAPI.start()
    chatAPI.subscribe(onMessageHandlerCreator(dispatch))
}

export const stopMessagesListening = (): AppThunkType => async (dispatch: AppThunkDispatch) => {
    chatAPI.unsubscribe(onMessageHandlerCreator(dispatch))
    chatAPI.stop()
}

export const sendMessage =
    (message: string): AppThunkType =>
    async (dispatch: AppThunkDispatch) => {
        chatAPI.sendMessage(message)
    }

// types
export type InitialChatStateType = typeof initialState
export type ChatActionsType = ReturnType<typeof setMessages>
