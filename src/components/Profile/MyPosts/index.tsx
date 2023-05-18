import React, { ChangeEvent } from 'react';
import styles from './MyPosts.module.scss';
import { MyPostsPropsType } from './MyPostsContainer';
import Post from './Post';
import Button from '../../Button';

const MyPosts = (props: MyPostsPropsType) => {
    const { profile, updateNewPostText, addPost } = props;

    const onChangeInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let postText = e.currentTarget.value;
        if (!postText) postText = '';
        updateNewPostText(postText);
    };

    return (
        <div className={styles.container}>
            <h3 className={styles.heading}>My posts</h3>
            <div className={styles.postBox}>
                <textarea
                    className={styles.postField}
                    onChange={onChangeInputHandler}
                    value={profile.newPostText}
                    placeholder="Enter text"
                />
                <Button title={'Add post'} callback={addPost} />
            </div>
            <div className={styles.posts}>
                {
                    profile.postsData.map(post => (
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