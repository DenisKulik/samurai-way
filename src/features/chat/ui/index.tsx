import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from 'features/chat/ui/chat.module.scss'
import { Messages } from 'features/chat/ui/messages'
import { AddMessageForm } from 'features/chat/ui/add-message-form'
import { startMessagesListening, stopMessagesListening } from 'features/chat/model/chat.reducer'
import { getStatus } from 'features/chat/model/chat.selectors'

const Chat = () => {
    const status = useSelector(getStatus)

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
            {status === 'error' && <div>Some error occurred. Please refresh the page</div>}
            <>
                <Messages />
                <AddMessageForm />
            </>
        </div>
    )
}

export default Chat
