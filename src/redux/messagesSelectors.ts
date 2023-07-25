// selectors
import { AppStateType } from 'redux/store'
import { createSelector } from 'reselect'
import { DialogType, MessageType } from 'redux/messagesReducer'

const getDialogsDataSelector = (state: AppStateType) => state.messages.dialogsData
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
