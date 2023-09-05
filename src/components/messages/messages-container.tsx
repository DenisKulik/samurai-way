import { ComponentType } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { AppStateType, AppThunkDispatch } from 'state/store'
import { withAuthRedirect } from 'hoc'
import { addMessage, DialogType, MessageType } from 'state/reducers/messages.reducer'
import { getDialogsData, getMessagesData } from 'state/selectors/messages.selectors'
import { Messages } from 'components/messages'

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
