import React from 'react';
import styles from './Post.module.scss';
import user from '../../../../img/user.jpg';

type PostPropsType = {
    message: string,
    likesCount: number
}

const Post: React.FC<PostPropsType> = (props) => {
    const { message, likesCount } = props;

    return (
        <div className={styles.item}>
            <img className={styles.userImg} src={user}
                 alt="user" />
            <div className={styles.message}>
                <p>{message}</p>
                <span>like {likesCount}</span>
            </div>
        </div>
    );
};

export default Post;