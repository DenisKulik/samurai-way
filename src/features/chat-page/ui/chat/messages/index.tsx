import { useEffect, useState } from 'react'

import { Message } from 'features/chat-page/ui/chat/messages/message'
import styles from './messages.module.scss'

type Props = {
    wsChannel: WebSocket | null
}

export const Messages = ({ wsChannel }: Props) => {
    const [messages, setMessages] = useState<MessageType[]>([])

    useEffect(() => {
        const messageHandler = (e: MessageEvent) => {
            const newMessages = JSON.parse(e.data)
            setMessages(prevMessages => [...prevMessages, ...newMessages])
        }
        wsChannel?.addEventListener('message', messageHandler)

        return () => {
            wsChannel?.removeEventListener('message', messageHandler)
        }
    }, [wsChannel])

    const messagesItems = messages.map((message, idx) => <Message key={idx} message={message} />)
    return <div className={styles.messages}>{messagesItems}</div>
}

export type MessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}
