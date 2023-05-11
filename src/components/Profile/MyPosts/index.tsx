import React, { ChangeEvent } from 'react';
import styles from './MyPosts.module.scss';
import Post from './Post';
import {
    addPostActionCreator, PostType, updateNewPostTextActionCreator
} from '../../../redux/profileReducer';
import { ActionsTypes } from '../../../redux/reduxStore';

type MyPostsPropsType = {
    postsData: PostType[]
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

const MyPosts = (props: MyPostsPropsType) => {
    const {
        postsData,
        newPostText,
        dispatch
    } = props;

    const onChangeInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let postText = e.currentTarget.value;
        if (!postText) postText = '';
        dispatch(updateNewPostTextActionCreator(postText));
    };

    const addPostHandler = () => dispatch(addPostActionCreator());

    return (
        <div className={styles.container}>
            <h3 className={styles.heading}>My posts</h3>
            <div className={styles.postBox}>
                <textarea
                    className={styles.postField}
                    onChange={onChangeInputHandler}
                    value={newPostText}
                    placeholder="Enter text"
                />
                <button className={styles.redBtn} onClick={addPostHandler}>
                    Add post
                </button>
            </div>
            <div className={styles.posts}>
                {
                    postsData.map(post => (
                        <Post
                            key={post.id}
                            message={post.message}
                            likesCount={post.likesCount}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default MyPosts;