import { ChangeEvent } from 'react';
import { Redirect } from 'react-router-dom';
import styles from './Dialogs.module.scss';
import Dialog from './Dialog';
import Message from './Message';
import { DialogsPropsType } from './DialogContainer';
import Button from '../Button';

const Dialogs = (props: DialogsPropsType) => {
    const { messages, auth, sendMessage, updateNewMessage } = props;

    if (!auth.isAuth) return <Redirect to="/login" />;

    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let message = e.currentTarget.value;
        if (!message) message = '';
        updateNewMessage(message);
    };

    const dialogItems = messages.dialogsData.map(user => (
        <Dialog
            key={user.id}
            id={user.id}
            name={user.name}
            isActive={false}
        />
    ));
    const messageItems = messages.messagesData.map(item => (
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
                        value={messages.newMessageText}
                        rows={1}
                    />
                    <Button title={'Send'} callback={sendMessage} />
                </div>
            </div>
        </div>
    );
};

export default Dialogs;