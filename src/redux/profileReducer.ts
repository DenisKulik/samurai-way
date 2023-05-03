import { ActionType, PostType, ProfileType, } from './state';

type ADD_POST_TYPE = 'ADD-POST';
type UPDATE_NEW_POST_TEXT_TYPE = 'UPDATE-NEW-POST-TEXT';
type addPostActionType = { type: ADD_POST_TYPE }
type updateNewPostTextActionType = {
    type: UPDATE_NEW_POST_TEXT_TYPE,
    postText: string
}

const ADD_POST: ADD_POST_TYPE = 'ADD-POST';
const UPDATE_NEW_POST_TEXT: UPDATE_NEW_POST_TEXT_TYPE = 'UPDATE-NEW-POST-TEXT';
export const addPostActionCreator = (): addPostActionType => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (postText: string): updateNewPostTextActionType =>
    ({ type: UPDATE_NEW_POST_TEXT, postText });

const profileReducer = (state: ProfileType,
                        action: ActionType): ProfileType => {
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