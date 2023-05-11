import { ActionsTypes } from './reduxStore';

export type PostType = {
    id: number
    message: string
    likesCount: number
}

type ProfileType = {
    postsData: PostType[]
    newPostText: string
};

type ADD_POST_TYPE = 'ADD-POST';
type UPDATE_NEW_POST_TEXT_TYPE = 'UPDATE-NEW-POST-TEXT';

const initialState: ProfileType = {
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

const ADD_POST: ADD_POST_TYPE = 'ADD-POST';
const UPDATE_NEW_POST_TEXT: UPDATE_NEW_POST_TEXT_TYPE = 'UPDATE-NEW-POST-TEXT';
export const addPostActionCreator = () => ({ type: ADD_POST } as const);
export const updateNewPostTextActionCreator = (postText: string) =>
    ({ type: UPDATE_NEW_POST_TEXT, postText } as const);

const profileReducer = (state: ProfileType = initialState,
                        action: ActionsTypes): ProfileType => {
    switch (action.type) {
        case ADD_POST:
            if (!state.newPostText.trim()) return state;
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            };
            state.postsData.unshift(newPost);
            state.newPostText = '';
            break;
        case UPDATE_NEW_POST_TEXT:
            if (action.postText) state.newPostText = action.postText;
            break;
    }

    return state;
};

export default profileReducer;