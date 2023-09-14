import { useEffect, useState } from 'react'

import { Button } from 'common/components/button'
import styles from './add-message-form.module.scss'

type Props = {
    wsChannel: WebSocket | null
}

export const AddMessageForm = ({ wsChannel }: Props) => {
    const [message, setMessage] = useState('')
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')

    useEffect(() => {
        const openHandler = () => {
            setReadyStatus('ready')
        }
        wsChannel?.addEventListener('open', openHandler)

        return () => {
            wsChannel?.removeEventListener('open', openHandler)
        }
    }, [wsChannel])

    const onSendMessage = () => {
        if (!message) return
        wsChannel?.send(message)
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
            <Button
                onClick={onSendMessage}
                title="Send"
                type="submit"
                disabled={wsChannel !== null && readyStatus !== 'ready'}
            />
        </form>
    )
}
