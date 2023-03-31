import styles from './Post.module.scss';
import user from '../../../../img/user.jpg';

const Post = () => {
    return (
        <div className={styles.item}>
            <img className={styles.userImg} src={user}
                 alt="user" />
            <div className={styles.message}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                   Accusantium culpa debitis doloribus</p>
                <span>like</span>
            </div>
        </div>
    );
};

export default Post;