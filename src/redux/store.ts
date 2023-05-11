// eslint-disable-file
// @ts-nocheck

import profileReducer, {
    addPostActionCreator, PostType, updateNewPostTextActionCreator
} from './profileReducer';
import messagesReducer, {
    addMessageActionCreator, updateNewMessageActionCreator
} from './messagesReducer';

type ProfileType = {
    postsData: PostType[]
    newPostText: string
};

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

type MessagesType = {
    dialogsData: DialogType[]
    messagesData: MessageType[]
    newMessageText: string
}

type StateType = {
    profile: ProfileType
    messages: MessagesType
}

type ActionsTypes = ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof updateNewMessageActionCreator>
    | ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>

type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
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
            newPostText: '',
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
            newMessageText: '',
        },
    },
    _callSubscriber() {},

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.messages = messagesReducer(this._state.messages, action);
        this._callSubscriber();
    }
};

console.log(store);