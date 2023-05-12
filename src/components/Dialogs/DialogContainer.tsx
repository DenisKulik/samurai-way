import Dialogs from './index';
import StoreContext from '../../StoreContext';
import {
    addMessageActionCreator, updateNewMessageActionCreator
} from '../../redux/messagesReducer';

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
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
            }
            }

        </StoreContext.Consumer>
    );
};

export default DialogsContainer;