import { createSelector } from 'reselect'
import { AppStateType } from 'app/model/store'
import { MessageType, StatusType } from 'features/chat/api/chat.api'

// selectors
const getMessagesSelector = (state: AppStateType) => state.chat.messages
const getStatusSelector = (state: AppStateType) => state.chat.status

// selectors with reselect
export const getMessages = createSelector(
    getMessagesSelector,
    (messages: MessageType[]) => messages,
)
export const getStatus = createSelector(getStatusSelector, (status: StatusType) => status)
