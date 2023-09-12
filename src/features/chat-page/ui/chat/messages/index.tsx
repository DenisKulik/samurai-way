import { useEffect, useState } from 'react'
import { Message } from 'features/chat-page/ui/chat/messages/message'
import styles from './messages.module.scss'

const wsChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

export const Messages = () => {
    const [messages, setMessages] = useState<MessageType[]>([])

    useEffect(() => {
        wsChannel.addEventListener('message', e => {
            const newMessages = JSON.parse(e.data)
            setMessages(prevMessages => [...prevMessages, ...newMessages])
        })
        // eslint-disable-next-line
    }, [])

    const messagesItems = messages.map((message, idx) => <Message key={idx} message={message} />)
    return <div className={styles.messages}>{messagesItems}</div>
}

export type MessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}
