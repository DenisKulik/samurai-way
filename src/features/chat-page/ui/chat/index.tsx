import { Messages } from 'features/chat-page/ui/chat/messages'
import { AddMessageForm } from 'features/chat-page/ui/chat/add-message-form'
import { useEffect, useState } from 'react'

export const Chat = () => {
    const [wsChannel, setWsChannel] = useState<WebSocket | null>(null)

    useEffect(() => {
        let ws: WebSocket

        const closeHandler = () => {
            setTimeout(createChannel, 3000)
        }

        const createChannel = () => {
            ws?.removeEventListener('close', closeHandler)
            ws?.close()

            ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
            ws.addEventListener('close', closeHandler)
            setWsChannel(ws)
        }
        createChannel()
    }, [])

    return (
        <div>
            <Messages wsChannel={wsChannel} />
            <AddMessageForm wsChannel={wsChannel} />
        </div>
    )
}
