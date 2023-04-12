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
                {
                    messagesData.map(item => (
                        <Message key={ item.id } message={ item.message } />
                    ))
                }
            </div>
        </div>
    );
};

export default Dialogs;