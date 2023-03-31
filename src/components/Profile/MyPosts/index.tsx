import styles from './MyPosts.module.scss';
import Post from './Post';

const MyPosts = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.heading}>My posts</h3>
            <div className={styles.postBox}>
                <textarea className={styles.postField}
                          placeholder="Enter text"></textarea>
                <button className={styles.redBtn}>Add post</button>
            </div>
            <div className={styles.posts}>
                <Post />
            </div>
        </div>
    );
};

export default MyPosts;