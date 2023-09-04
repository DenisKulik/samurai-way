import { memo } from 'react'
import styles from './Message.module.scss'

type MessageType = {
    message: string
}

const Message = memo(({ message }: MessageType) => {
    return <div className={styles.message}>{message}</div>
})

export default Message
