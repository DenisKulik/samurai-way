import {
    addPostActionCreator, updateNewPostTextActionCreator
} from '../../../redux/profileReducer';
import MyPosts from './index';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
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
            }
            }
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;