import { ActionsTypes } from './reduxStore';

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type InitialProfileStateType = {
    postsData: PostType[]
    newPostText: string
};

const initialState: InitialProfileStateType = {
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

export const addPostActionCreator = () => ({ type: 'ADD-POST' } as const);
export const updateNewPostTextActionCreator = (postText: string) =>
    ({ type: 'UPDATE-NEW-POST-TEXT', postText } as const);

const profileReducer = (
    state: InitialProfileStateType = initialState, action: ActionsTypes
): InitialProfileStateType => {
    switch (action.type) {
        case 'ADD-POST':
            if (!state.newPostText.trim()) return state;
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            };
            state.postsData.unshift(newPost);
            state.newPostText = '';
            break;
        case 'UPDATE-NEW-POST-TEXT':
            if (action.postText) state.newPostText = action.postText;
            break;
    }

    return state;
};

export default profileReducer;