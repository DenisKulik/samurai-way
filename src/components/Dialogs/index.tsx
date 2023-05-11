import { ChangeEvent } from 'react';
import styles from './Dialogs.module.scss';
import Dialog from './Dialog';
import Message from './Message';
import {
    addMessageActionCreator, DialogType, MessageType,
    updateNewMessageActionCreator
} from '../../redux/messagesReducer';
import { ActionsTypes } from '../../redux/reduxStore';


type DialogsPropsType = {
    dialogsData: DialogType[]
    messagesData: MessageType[]
    newMessageText: string
    dispatch: (action: ActionsTypes) => void
}

const Dialogs = (props: DialogsPropsType) => {
    const {
        dialogsData,
        messagesData,
        newMessageText,
        dispatch
    } = props;

    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let message = e.currentTarget.value;
        if (!message) message = '';
        dispatch(updateNewMessageActionCreator(message));
    };
    const sendMessageHandler = () => dispatch(addMessageActionCreator());

    const dialogItems = dialogsData.map(user => (
        <Dialog
            key={user.id}
            id={user.id}
            name={user.name}
            isActive={false}
        />
    ));
    const messageItems = messagesData.map(item => (
        <Message key={item.id} message={item.message} />
    ));

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogItems}
            </div>
            <div className={styles.dialogsMessages}>
                <div className={styles.dialogWrapper}>
                    {messageItems}
                </div>
                <div className={styles.newMessage}>
                    <textarea
                        className={styles.messageField}
                        onChange={onChangeMessageHandler}
                        value={newMessageText}
                        rows={1} />
                    <button className={styles.redBtn}
                            onClick={sendMessageHandler}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;