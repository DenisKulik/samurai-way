import styles from './Post.module.scss';
import user from '../../../../img/user.jpg';

type PostPropsType = {
    message: string,
    likeCount: number
}

const Post = (props: PostPropsType) => {
    const { message, likeCount } = props;

    return (
        <div className={styles.item}>
            <img className={styles.userImg} src={user}
                 alt="user" />
            <div className={styles.message}>
                <p>{message}</p>
                <span>like {likeCount}</span>
            </div>
        </div>
    );
};

export default Post;