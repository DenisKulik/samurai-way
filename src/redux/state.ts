export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

type ProfileType = {
    postsData: PostType[]
    currentPostText: string
};

type MessagesType = {
    dialogsData: DialogType[]
    messagesData: MessageType[]
    currentMessageText: string
}

export type StateType = {
    profile: ProfileType
    messages: MessagesType
}

export type ActionType = {
    type: string
    message?: string
    postText?: string
}

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void
};

const store: StoreType = {
    _state: {
        profile: {
            postsData: [
                {
                    id: 1,
                    message: 'Have fun creating amazing things!',
                    likesCount: 3
                },
                {
                    id: 2,
                    message: 'JavaScript powers modern web development.',
                    likesCount: 5
                },
            ],
            currentPostText: '',
        },
        messages: {
            dialogsData: [
                { id: 1, name: 'William' },
                { id: 2, name: 'Emma' },
                { id: 3, name: 'James' },
                { id: 4, name: 'Addison' },
                { id: 5, name: 'Ethan' },
                { id: 6, name: 'Hailey' },
            ],
            messagesData: [
                {
                    id: 1,
                    message: 'Hey, any advice for someone starting to learn programming?'
                },
                {
                    id: 2,
                    message: 'Sure! Start with a beginner-friendly language like JavaScript, and practice coding every day.'
                },
                {
                    id: 3,
                    message: 'Got it. Any specific resources you recommend?'
                },
                {
                    id: 4,
                    message: 'Codecademy and Udemy have great courses, and there are tons of coding blogs and YouTube tutorials out there too.'
                },
            ],
            currentMessageText: '',
        },
    },
    _callSubscriber(): void {},

    getState() {
        return this._state;
    },
    subscribe(observer: () => void): void {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        switch (action.type) {
            case 'ADD-POST':
                if (!this._state.profile.currentPostText.trim()) return;
                const newPost: PostType = {
                    id: new Date().getTime(),
                    message: this._state.profile.currentPostText,
                    likesCount: 0
                };
                this._state.profile.postsData.unshift(newPost);
                this._state.profile.currentPostText = '';
                this._callSubscriber();
                break;
            case 'ADD-MESSAGE':
                if (!this._state.messages.currentMessageText.trim()) return;
                const newMessage: MessageType = {
                    id: new Date().getTime(),
                    message: this._state.messages.currentMessageText,
                };
                this._state.messages.messagesData.push(newMessage);
                this._state.messages.currentMessageText = '';
                this._callSubscriber();
                break;
            case 'UPDATE-CURRENT-POST-TEXT':
                if (action.postText) {
                    this._state.profile.currentPostText = action.postText;
                }
                this._callSubscriber();
                break;
            case 'UPDATE-CURRENT-MESSAGE':
                if (action.message) {
                    this._state.messages.currentMessageText = action.message;
                }
                this._callSubscriber();
                break;
        }
    }
};

export default store;