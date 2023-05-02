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
    newPostText: string
};

type MessagesType = {
    dialogsData: DialogType[]
    messagesData: MessageType[]
    newMessageText: string
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

type ADD_POST_TYPE = 'ADD-POST';
type ADD_MESSAGE_TYPE = 'ADD-MESSAGE';
type UPDATE_NEW_POST_TEXT_TYPE = 'UPDATE-NEW-POST-TEXT';
type UPDATE_NEW_MESSAGE_TYPE = 'UPDATE-NEW-MESSAGE';

const ADD_POST: ADD_POST_TYPE = 'ADD-POST';
const ADD_MESSAGE: ADD_MESSAGE_TYPE = 'ADD-MESSAGE';
const UPDATE_NEW_POST_TEXT: UPDATE_NEW_POST_TEXT_TYPE = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE: UPDATE_NEW_MESSAGE_TYPE = 'UPDATE-NEW-MESSAGE';

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
    _callSubscriber(): void {},

    getState() {
        return this._state;
    },
    subscribe(observer: () => void): void {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                if (!this._state.profile.newPostText.trim()) return;
                const newPost: PostType = {
                    id: new Date().getTime(),
                    message: this._state.profile.newPostText,
                    likesCount: 0
                };
                this._state.profile.postsData.unshift(newPost);
                this._state.profile.newPostText = '';
                this._callSubscriber();
                break;
            case ADD_MESSAGE:
                if (!this._state.messages.newMessageText.trim()) return;
                const newMessage: MessageType = {
                    id: new Date().getTime(),
                    message: this._state.messages.newMessageText,
                };
                this._state.messages.messagesData.push(newMessage);
                this._state.messages.newMessageText = '';
                this._callSubscriber();
                break;
            case UPDATE_NEW_POST_TEXT:
                if (action.postText) {
                    this._state.profile.newPostText = action.postText;
                }
                this._callSubscriber();
                break;
            case UPDATE_NEW_MESSAGE:
                if (action.message) {
                    this._state.messages.newMessageText = action.message;
                }
                this._callSubscriber();
                break;
        }
    }
};

type addPostActionType = { type: ADD_POST_TYPE }
type addMessageActionType = { type: ADD_MESSAGE_TYPE }
type updateNewPostTextActionType = {
    type: UPDATE_NEW_POST_TEXT_TYPE,
    postText: string
}
type updateNewMessageActionType = {
    type: UPDATE_NEW_MESSAGE_TYPE,
    message: string
}

export const addPostActionCreator = (): addPostActionType => ({ type: ADD_POST });
export const addMessageActionCreator = (): addMessageActionType => ({ type: ADD_MESSAGE });
export const updateNewPostTextActionCreator = (postText: string): updateNewPostTextActionType =>
    ({ type: UPDATE_NEW_POST_TEXT, postText });
export const updateNewMessageActionCreator = (message: string): updateNewMessageActionType =>
    ({ type: UPDATE_NEW_MESSAGE, message });

export default store;