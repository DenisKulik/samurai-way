import { ComponentType } from 'react';
import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';
import {
    addMessageActionCreator, InitialMessagesStateType,
    updateNewMessageActionCreator
} from '../../redux/messagesReducer';
import { AppStateType } from '../../redux/reduxStore';
import Dialogs from './index';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

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

export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

// types
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    messages: InitialMessagesStateType
}

type MapDispatchToPropsType = {
    sendMessage: () => void
    updateNewMessage: (message: string) => void
}