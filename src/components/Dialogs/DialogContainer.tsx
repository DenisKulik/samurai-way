import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
    addMessageActionCreator, InitialMessagesStateType,
    updateNewMessageActionCreator
} from '../../redux/messagesReducer';
import { AppStateType } from '../../redux/reduxStore';
import Dialogs from './index';

export type DialogsPropsType = InitialMessagesStateType & MapDispatchToPropsType

type MapDispatchToPropsType = {
    sendMessage: () => void
    updateNewMessage: (message: string) => void
}

const mapStateToProps = (state: AppStateType): InitialMessagesStateType => {
    return {
        dialogsData: state.messages.dialogsData,
        messagesData: state.messages.messagesData,
        newMessageText: state.messages.newMessageText,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: () => dispatch(addMessageActionCreator()),
        updateNewMessage: (message: string) => {
            dispatch(updateNewMessageActionCreator(message));
        },
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;