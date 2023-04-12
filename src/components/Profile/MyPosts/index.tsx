import styles from './MyPosts.module.scss';
import Post from './Post';
import { PostType } from '../../../redux/state';

type MyPostsPropsType = {
    postsData: PostType[]
}

const MyPosts = (props: MyPostsPropsType) => {
    const { postsData } = props;

    return (
        <div className={ styles.container }>
            <h3 className={ styles.heading }>My posts</h3>
            <div className={ styles.postBox }>
                <textarea className={ styles.postField }
                          placeholder="Enter text"></textarea>
                <button className={ styles.redBtn }>Add post</button>
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