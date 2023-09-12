import { Button } from 'common/components/button'
import styles from './add-message-form.module.scss'
import { useState } from 'react'

const wsChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

export const AddMessageForm = () => {
    const [message, setMessage] = useState('')

    const onSendMessage = () => {
        if (!message) return
        wsChannel.send(message)
        setMessage('')
    }
    return (
        <form className={styles.addMessageForm}>
            <textarea
                className={styles.messageField}
                onChange={e => setMessage(e.currentTarget.value)}
                value={message}
                rows={1}
            ></textarea>
            <Button onClick={onSendMessage} title="Send" type="submit" />
        </form>
    )
}
