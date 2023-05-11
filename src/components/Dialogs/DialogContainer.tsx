import { Store } from 'redux';
import {
    addMessageActionCreator, updateNewMessageActionCreator
} from '../../redux/messagesReducer';
import { ActionsTypes, StateType } from '../../redux/reduxStore';
import Dialogs from './index';

type DialogsContainerPropsType = {
    store: Store<StateType, ActionsTypes>
}

const DialogsContainer = ({ store }: DialogsContainerPropsType) => {
    const { dispatch } = store;
    const {
        dialogsData,
        messagesData,
        newMessageText
    } = store.getState().messages;

    const onUpdateNewMessage = (message: string) => {
        dispatch(updateNewMessageActionCreator(message));
    };
    const onSendMessage = () => dispatch(addMessageActionCreator());

    return (
        <Dialogs
            dialogsData={dialogsData}
            messagesData={messagesData}
            newMessageText={newMessageText}
            sendMessage={onSendMessage}
            updateNewMessage={onUpdateNewMessage}
        />
    );
};

export default DialogsContainer;