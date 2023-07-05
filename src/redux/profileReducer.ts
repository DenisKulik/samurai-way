import { AppActionsType } from './reduxStore';

export type PostType = {
    id: number
    message: string
    likesCount: number
}

type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: {
        small: string | null
        large: string | null
    }
}

export type InitialProfileStateType = {
    profile: ProfileType
    postsData: PostType[]
    newPostText: string
};

const initialState: InitialProfileStateType = {
    profile: {} as ProfileType,
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
};

export const addPost = () => ({ type: 'ADD-POST' } as const);
export const updateNewPostText = (postText: string) =>
    ({ type: 'UPDATE-NEW-POST-TEXT', postText } as const);
export const setUserProfile = (profile: ProfileType) =>
    ({ type: 'SET-USER-PROFILE', profile } as const);

const profileReducer = (
    state: InitialProfileStateType = initialState, action: AppActionsType
): InitialProfileStateType => {
    switch (action.type) {
        case 'ADD-POST':
            if (!state.newPostText.trim()) return state;
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postsData: [ newPost, ...state.postsData ],
                newPostText: ''
            };
        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.postText
            };
        case 'SET-USER-PROFILE': {
            return {
                ...state,
                profile: action.profile
            };
        }
        default:
            return state;
    }
};

export default profileReducer;