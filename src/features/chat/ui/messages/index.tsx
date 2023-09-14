import { Message } from 'features/chat/ui/messages/message'
import styles from 'features/chat/ui/messages/messages.module.scss'
import { useSelector } from 'react-redux'
import { getMessages } from 'features/chat/model/chat.selectors'

export const Messages = () => {
    const messages = useSelector(getMessages)

    const messagesItems = messages.map((message, idx) => <Message key={idx} message={message} />)
    return <div className={styles.messages}>{messagesItems}</div>
}
