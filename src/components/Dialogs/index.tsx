import React from 'react';
import styles from './Dialogs.module.scss';
import Dialog from './Dialog';
import Message from './Message';
import { DialogType, MessageType } from '../../redux/state';


type DialogsPropsType = {
    dialogsData: DialogType[]
    messagesData: MessageType[]
}

const Dialogs = (props: DialogsPropsType) => {
    const { dialogsData, messagesData } = props;

    const messageRef = React.createRef<HTMLTextAreaElement>();

    const sendMessage = () => {
        const newMessage = messageRef.current?.value;
        alert(newMessage);
    };

    return (
        <div className={ styles.dialogs }>
            <div className={ styles.dialogsItems }>
                {
                    dialogsData.map(user => (
                        <Dialog key={ user.id } id={ user.id }
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
                    <textarea className={ styles.messageField }
                              ref={ messageRef }
                              rows={ 1 }></textarea>
                    <button className={ styles.redBtn } onClick={ sendMessage }>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;