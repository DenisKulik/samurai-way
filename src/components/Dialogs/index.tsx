import { ChangeEvent } from 'react';
import styles from './Dialogs.module.scss';
import Dialog from './Dialog';
import Message from './Message';
import {
    ActionType, addMessageActionCreator, DialogType, MessageType,
    updateNewMessageActionCreator
} from '../../redux/state';


type DialogsPropsType = {
    dialogsData: DialogType[]
    messagesData: MessageType[]
    currentMessageText: string
    dispatch: (action: ActionType) => void
}

const Dialogs = (props: DialogsPropsType) => {
    const {
        dialogsData,
        messagesData,
        currentMessageText,
        dispatch
    } = props;

    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let message = e.currentTarget.value;
        if (!message) message = '';
        dispatch(updateNewMessageActionCreator(message));
    };

    const sendMessage = () => dispatch(addMessageActionCreator());

    return (
        <div className={ styles.dialogs }>
            <div className={ styles.dialogsItems }>
                {
                    dialogsData.map(user => (
                        <Dialog
                            key={ user.id }
                            id={ user.id }
                            name={ user.name }
                            isActive={ false } />
                    ))
                }
            </div>
            <div className={ styles.dialogsMessages }>
                <div className={ styles.dialogWrapper }>
                    {
                        messagesData.map(item => (
                            <Message key={ item.id } message={ item.message } />
                        ))
                    }
                </div>
                <div className={ styles.newMessage }>
                    <textarea
                        className={ styles.messageField }
                        onChange={ onChangeMessageHandler }
                        value={ currentMessageText }
                        rows={ 1 } />
                    <button className={ styles.redBtn } onClick={ sendMessage }>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;