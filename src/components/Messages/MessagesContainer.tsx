import { ComponentType } from 'react'
import { connect } from 'react-redux'
import { compose, Dispatch } from 'redux'
import { AppStateType } from 'state/store'
import { addMessage, DialogType, MessageType } from 'state/reducers/messagesReducer'
import Messages from './index'
import { withAuthRedirect } from 'hoc/withAuthRedirect'
import { getDialogsData, getMessagesData } from 'state/selectors/messagesSelectors'

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
