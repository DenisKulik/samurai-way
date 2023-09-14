import { useState } from 'react'

import { Button } from 'common/components/button'
import styles from 'features/chat/ui/add-message-form/add-message-form.module.scss'
import { useDispatch } from 'react-redux'
import { sendMessage } from 'features/chat/model/chat.reducer'

export const AddMessageForm = () => {
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const onSendMessage = () => {
        if (!message) return
        dispatch(sendMessage(message))
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
