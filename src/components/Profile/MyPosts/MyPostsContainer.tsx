import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
    addPostActionCreator, InitialProfileStateType,
    updateNewPostTextActionCreator
} from '../../../redux/profileReducer';
import { AppStateType } from '../../../redux/reduxStore';
import MyPosts from './index';

export type MyPostsPropsType = InitialProfileStateType & MapDispatchToPropsType

type MapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (postText: string) => void
}

const mapStateToProps = (state: AppStateType): InitialProfileStateType => {
    return {
        postsData: state.profile.postsData,
        newPostText: state.profile.newPostText,
    };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        updateNewPostText: (postText: string) => {
            dispatch(updateNewPostTextActionCreator(postText));
        },
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;