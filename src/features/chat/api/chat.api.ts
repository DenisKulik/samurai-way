let subscribers = [] as SubscriberType[]

let ws: WebSocket | null = null

const closeHandler = () => {
    setTimeout(createChannel, 3000)
}

const createChannel = () => {
    ws?.removeEventListener('close', closeHandler)
    ws?.close()

    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    ws.addEventListener('close', closeHandler)
    ws.addEventListener('message', messageHandler)
}

const messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data)
    subscribers.forEach(subscriber => subscriber(newMessages))
}

export const chatAPI = {
    start() {
        createChannel()
    },
    stop() {
        subscribers = []
        ws?.removeEventListener('close', closeHandler)
        ws?.removeEventListener('message', messageHandler)
        ws?.close()
    },
    subscribe(callback: SubscriberType) {
        subscribers.push(callback)
    },
    unsubscribe(callback: SubscriberType) {
        subscribers = subscribers.filter(subscriber => subscriber !== callback)
    },
    sendMessage(message: string) {
        ws?.send(message)
    },
}

// types
export type MessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

type SubscriberType = (messages: MessageType[]) => void
