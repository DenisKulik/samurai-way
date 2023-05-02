import React, { ChangeEvent } from 'react';
import styles from './MyPosts.module.scss';
import { ActionType, PostType } from '../../../redux/state';
import Post from './Post';

type MyPostsPropsType = {
    postsData: PostType[]
    currentPostText: string
    dispatch: (action: ActionType) => void
}

const MyPosts = (props: MyPostsPropsType) => {
    const {
        postsData,
        currentPostText,
        dispatch
    } = props;

    const onChangeInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let postText = e.currentTarget.value;
        if (!postText) postText = '';
        dispatch({ type: 'UPDATE-CURRENT-POST-TEXT', postText });
    };

    const addPostHandler = () => dispatch({ type: 'ADD-POST' });

    return (
        <div className={ styles.container }>
            <h3 className={ styles.heading }>My posts</h3>
            <div className={ styles.postBox }>
                <textarea
                    className={ styles.postField }
                    onChange={ onChangeInputHandler }
                    value={ currentPostText }
                    placeholder="Enter text" />
                <button className={ styles.redBtn } onClick={ addPostHandler }>
                    Add post
                </button>
            </div>
            <div className={ styles.posts }>
                {
                    postsData.map(post => (
                        <Post
                            key={ post.id }
                            message={ post.message }
                            likesCount={ post.likesCount }
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default MyPosts;