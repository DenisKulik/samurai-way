import styles from 'features/profile/ui/my-posts/post/post.module.scss'
import user from 'common/img/user-default.png'
import { RiHeart3Line } from 'react-icons/ri'

type Props = {
    message: string
    likesCount: number
}

export const Post = ({ message, likesCount }: Props) => {
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
