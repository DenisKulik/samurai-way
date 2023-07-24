import { ComponentType } from 'react'
import { connect } from 'react-redux'
import { compose, Dispatch } from 'redux'
import { AppStateType } from 'redux/store'
import { addMessage, InitialMessagesStateType } from 'redux/messagesReducer'
import Dialogs from './index'
import { withAuthRedirect } from 'hoc/withAuthRedirect'

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    messages: state.messages,
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
    messages: InitialMessagesStateType
}

type MapDispatchToPropsType = {
    sendMessage: (message: string) => void
}
