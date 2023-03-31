import styles from './MyPosts.module.scss';
import user from '../../../img/user.jpg';

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
                <div className={styles.item}>
                    <img className={styles.userImg} src={user}
                         alt="user" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                       Accusantium culpa debitis doloribus</p>
                </div>
            </div>
        </div>
    );
};

export default MyPosts;