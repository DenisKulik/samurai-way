import { memo } from 'react'
import styles from './Dialogs.module.scss'
import Dialog from './Dialog'
import Message from './Message'
import { DialogsPropsType } from './DialogContainer'
import MessageForm, { MessageFormDataType } from './MessageForm'

const Dialogs = memo((props: DialogsPropsType) => {
    const { messages, sendMessage } = props

    const onSubmit = (formData: MessageFormDataType) => {
        sendMessage(formData.message)
    }

    const dialogItems = messages.dialogsData.map(user => (
        <Dialog key={user.id} id={user.id} name={user.name} isActive={false} />
    ))
    const messageItems = messages.messagesData.map(item => (
        <Message key={item.id} message={item.message} />
    ))

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>{dialogItems}</div>
            <div className={styles.dialogsMessages}>
                <div className={styles.dialogWrapper}>{messageItems}</div>
                <MessageForm onSubmit={onSubmit} />
            </div>
        </div>
    )
})

export default Dialogs
