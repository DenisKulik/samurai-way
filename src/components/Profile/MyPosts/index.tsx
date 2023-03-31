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
                <Post message={'Have fun creating amazing things!'}
                      likesCount={3} />
                <Post message={'JavaScript powers modern web development.'}
                      likesCount={5} />
            </div>
        </div>
    );
};

export default MyPosts;