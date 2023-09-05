// selectors
import { AppStateType } from 'app/model/store'
import { createSelector } from 'reselect'
import { DialogType, MessageType } from 'features/messages/model/messages.reducer'

const getDialogsDataSelector = (state: AppStateType) => state.messages.dialogsList
const getMessagesDataSelector = (state: AppStateType) => state.messages.messagesData

// selectors with reselect
export const getDialogsData = createSelector(
    getDialogsDataSelector,
    (dialogsData: DialogType[]) => dialogsData,
)
export const getMessagesData = createSelector(
    getMessagesDataSelector,
    (messagesData: MessageType[]) => messagesData,
)
