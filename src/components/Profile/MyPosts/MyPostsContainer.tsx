import {
    addPostActionCreator, PostType, updateNewPostTextActionCreator
} from '../../../redux/profileReducer';
import { ActionsTypes, StateType } from '../../../redux/reduxStore';
import MyPosts from './index';
import { Store } from 'redux';

type MyPostsPropsType = {
    store: Store<StateType, ActionsTypes>
}

const MyPostsContainer = ({ store }: MyPostsPropsType) => {
    const { postsData, newPostText } = store.getState().profile;
    const { dispatch } = store;

    const updateNewPostText = (postText: string) => dispatch(
        updateNewPostTextActionCreator(postText));
    const addPost = () => dispatch(addPostActionCreator());

    return (
        <MyPosts
            postsData={postsData}
            newPostText={newPostText}
            updateNewPostText={updateNewPostText}
            addPost={addPost}
        />
    );
};

export default MyPostsContainer;