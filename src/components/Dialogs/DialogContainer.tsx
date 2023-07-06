import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
    addMessageActionCreator, InitialMessagesStateType,
    updateNewMessageActionCreator
} from '../../redux/messagesReducer';
import { AppStateType } from '../../redux/reduxStore';
import Dialogs from './index';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    messages: InitialMessagesStateType
}

type MapDispatchToPropsType = {
    sendMessage: () => void
    updateNewMessage: (message: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        messages: state.messages
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

export default withAuthRedirect(
    connect(mapStateToProps, mapDispatchToProps)(Dialogs));