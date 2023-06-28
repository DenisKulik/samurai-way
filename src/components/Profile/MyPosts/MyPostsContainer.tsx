import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
    addPost, InitialProfileStateType,
    updateNewPostText
} from '../../../redux/profileReducer';
import { AppStateType } from '../../../redux/reduxStore';
import MyPosts from './index';

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    profile: InitialProfileStateType
}

type MapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (postText: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage
    };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: () => dispatch(addPost()),
        updateNewPostText: (postText: string) => {
            dispatch(updateNewPostText(postText));
        },
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;