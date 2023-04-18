import styles from './MyPosts.module.scss';
import Post from './Post';
import { PostType } from '../../../redux/state';
import React from 'react';

type MyPostsPropsType = {
    postsData: PostType[]
}

const MyPosts = (props: MyPostsPropsType) => {
    const { postsData } = props;

    const postMessageRef = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        const postMessage = postMessageRef.current?.value;
        alert(postMessage);
    };

    return (
        <div className={ styles.container }>
            <h3 className={ styles.heading }>My posts</h3>
            <div className={ styles.postBox }>
                <textarea className={ styles.postField }
                          ref={ postMessageRef }
                          placeholder="Enter text"></textarea>
                <button className={ styles.redBtn } onClick={ addPost }>
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