import styles from './Post.module.scss'
import user from 'img/user-default.png'
import { RiHeart3Line } from 'react-icons/ri'

type PostPropsType = {
    message: string
    likesCount: number
}

const Post = (props: PostPropsType) => {
    const { message, likesCount } = props

    return (
        <div className={styles.item}>
            <img className={styles.userImg} src={user} alt="user" width={50} height={50} />
            <div className={styles.message}>
                <p>{message}</p>
                <div className={styles.likesContainer}>
                    <RiHeart3Line />
                    {likesCount}
                </div>
            </div>
        </div>
    )
}

export default Post
