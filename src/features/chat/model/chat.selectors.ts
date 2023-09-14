import { createSelector } from 'reselect'
import { AppStateType } from 'app/model/store'
import { MessageType } from 'features/chat/api/chat.api'

// selectors
const getMessagesSelector = (state: AppStateType) => state.chat.messages

// selectors with reselect
export const getMessages = createSelector(
    getMessagesSelector,
    (messages: MessageType[]) => messages,
)
