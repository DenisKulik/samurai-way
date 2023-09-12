import styles from 'features/chat-page/ui/chat-page.module.scss'
import { Chat } from 'features/chat-page/ui/chat'

const ChatPage = () => {
    return (
        <div className={styles.chat}>
            <Chat />
        </div>
    )
}

export default ChatPage
