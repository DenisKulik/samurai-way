import { memo } from 'react'

import styles from 'components/Messages/Messages.module.scss'
import Dialog from './Dialog'
import Message from './Message'
import { DialogsPropsType } from 'components/Messages/MessagesContainer'
import MessageForm, { MessageFormDataType } from './MessageForm'

const Messages = memo((props: DialogsPropsType) => {
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
})

export default Messages
