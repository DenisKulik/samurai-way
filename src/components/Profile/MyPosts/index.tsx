import React, { ChangeEvent } from 'react';
import styles from './MyPosts.module.scss';
import { PostType } from '../../../redux/state';
import Post from './Post';

type MyPostsPropsType = {
    postsData: PostType[]
    currentPostText: string
    addPost: () => void
    updateCurrentPostText: (currentPost: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {
    const {
        postsData,
        currentPostText,
        addPost,
        updateCurrentPostText
    } = props;

    const onChangeInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let postMessage = e.currentTarget.value;
        if (!postMessage) postMessage = '';

        updateCurrentPostText(postMessage);
    };

    const addPostHandler = () => addPost();

    return (
        <div className={ styles.container }>
            <h3 className={ styles.heading }>My posts</h3>
            <div className={ styles.postBox }>
                <textarea className={ styles.postField }
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
                        <Post key={ post.id } message={ post.message }
                              likesCount={ post.likesCount } />
                    ))
                }
            </div>
        </div>
    );
};

export default MyPosts;