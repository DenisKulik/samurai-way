import { memo } from 'react'

import styles from 'features/chat/ui/messages/message/message.module.scss'
import { DomainMessageType } from 'features/chat/api/chat.api'

type Props = {
    message: DomainMessageType
}

export const Message = memo(({ message }: Props) => {
    return (
        <div className={styles.message}>
            <img className={styles.photo} src={message.photo} alt="avatar" />
            <b>{message.userName}</b>
            <p>{message.message}</p>
        </div>
    )
})
