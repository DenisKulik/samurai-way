import { ComponentType } from 'react'
import { connect } from 'react-redux'
import { compose, Dispatch } from 'redux'
import { AppStateType } from 'redux/store'
import { addMessage, DialogType, MessageType } from 'redux/messagesReducer'
import Dialogs from './index'
import { withAuthRedirect } from 'hoc/withAuthRedirect'
import { getDialogsData, getMessagesData } from 'redux/messagesSelectors'

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    dialogsData: getDialogsData(state),
    messagesData: getMessagesData(state),
})

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
    sendMessage: message => dispatch(addMessage(message)),
})

export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)

// types
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    dialogsData: DialogType[]
    messagesData: MessageType[]
}

type MapDispatchToPropsType = {
    sendMessage: (message: string) => void
}
