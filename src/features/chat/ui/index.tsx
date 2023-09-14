import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import styles from 'features/chat/ui/chat.module.scss'
import { Messages } from 'features/chat/ui/messages'
import { AddMessageForm } from 'features/chat/ui/add-message-form'
import { startMessagesListening, stopMessagesListening } from 'features/chat/model/chat.reducer'

const Chat = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
        // eslint-disable-next-line
    }, [])

    return (
        <div className={styles.chat}>
            <Messages />
            <AddMessageForm />
        </div>
    )
}

export default Chat
