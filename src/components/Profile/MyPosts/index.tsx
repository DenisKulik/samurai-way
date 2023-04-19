import React from 'react';
import styles from './MyPosts.module.scss';
import { PostType } from '../../../redux/state';
import Post from './Post';

type MyPostsPropsType = {
    postsData: PostType[]
    addPost: (postMessage: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {
    const { postsData, addPost } = props;

    const postMessageRef = React.createRef<HTMLTextAreaElement>();

    const addPostHandler = () => {
        if (postMessageRef.current) {
            const postMessage = postMessageRef.current.value.trim();
            if (!postMessage) return;

            addPost(postMessage);
            postMessageRef.current.value = '';
        }
    };

    return (
        <div className={ styles.container }>
            <h3 className={ styles.heading }>My posts</h3>
            <div className={ styles.postBox }>
                <textarea className={ styles.postField }
                          ref={ postMessageRef }
                          placeholder="Enter text"></textarea>
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