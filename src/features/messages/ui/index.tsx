import styles from 'features/messages/ui/messages.module.scss'

import { DialogsPropsType } from 'features/messages/ui/messages-container'
import MessageForm, { MessageFormDataType } from 'features/messages/ui/message-form'
import { Dialog } from 'features/messages/ui/dialog'
import { Message } from 'features/messages/ui/message'

export const Messages = (props: DialogsPropsType) => {
    const { dialogsData, messagesData, sendMessage } = props

    const onSubmit = (formData: MessageFormDataType) => {
        sendMessage(formData.message)
    }

    const dialogsList = dialogsData.map(user => (
        <Dialog key={user.id} id={user.id} name={user.name} isActive={false} />
    ))
    const messageItems = messagesData.map(item => <Message key={item.id} message={item.message} />)

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>{dialogsList}</div>
            <div className={styles.dialogsMessages}>
                <div className={styles.dialogWrapper}>{messageItems}</div>
                <MessageForm onSubmit={onSubmit} />
            </div>
        </div>
    )
}
