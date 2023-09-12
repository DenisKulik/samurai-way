import { Messages } from 'features/chat-page/ui/chat/messages'
import { AddMessageForm } from 'features/chat-page/ui/chat/add-message-form'

export const Chat = () => {
    return (
        <div>
            <Messages />
            <AddMessageForm />
        </div>
    )
}
