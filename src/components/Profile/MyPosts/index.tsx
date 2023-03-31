import styles from './MyPosts.module.scss';

const MyPosts = () => {
    return (
        <div className={styles.container}>
            <h3>My posts</h3>
            <div>
                New post
            </div>
            <div>
                <div className={styles.item}>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>
        </div>
    );
};

export default MyPosts;