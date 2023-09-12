import styles from './message.module.scss'
import { MessageType } from 'features/chat-page/ui/chat/messages/index'

type Props = {
    message: MessageType
}

export const Message = ({ message }: Props) => {
    return (
        <div className={styles.message}>
            <img className={styles.photo} src={message.photo} alt="avatar" />
            <b>{message.userName}</b>
            <p>{message.message}</p>
        </div>
    )
}
