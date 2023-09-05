import { ComponentType } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { AppStateType, AppThunkDispatch } from 'app/model/store'
import { withAuthRedirect } from 'common/hoc'
import { addMessage, DialogType, MessageType } from 'features/messages/model/messages.reducer'
import { getDialogsData, getMessagesData } from 'features/messages/model/messages.selectors'
import { Messages } from 'features/messages/ui/index'

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    dialogsData: getDialogsData(state),
    messagesData: getMessagesData(state),
})

const mapDispatchToProps = (dispatch: AppThunkDispatch): MapDispatchToPropsType => ({
    sendMessage: message => dispatch(addMessage(message)),
})

export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Messages)

// types
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType
type MapStateToPropsType = {
    dialogsData: DialogType[]
    messagesData: MessageType[]
}
type MapDispatchToPropsType = {
    sendMessage: (message: string) => void
}
