import renderEntireTree from '../render';

export type StateType = {
    profile: ProfileType
    messages: MessagesType
}

type ProfileType = {
    postsData: PostType[]
    currentPostText: string
};

type MessagesType = {
    dialogsData: DialogType[]
    messagesData: MessageType[]
}

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

export const state: StateType = {
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
        currentPostText: ''
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
    },
};

export const addPost = (): void => {
    if (!state.profile.currentPostText.trim()) return;

    const newPost: PostType = {
        id: new Date().getTime(),
        message: state.profile.currentPostText,
        likesCount: 0
    };

    state.profile.postsData.unshift(newPost);
    state.profile.currentPostText = '';
    renderEntireTree(state);
};

export const updateCurrentPostText = (text: string): void => {
    state.profile.currentPostText = text;
    renderEntireTree(state);
};