import { NavLink } from 'react-router-dom'

import styles from 'features/users/ui/user/user.module.scss'
import userDefault from 'common/img/user-default.png'
import { UserType } from 'features/users/api/users.api.types'

type Props = {
    user: UserType
    isFollowingInProgress: number[]
    unfollowUser: (userId: number) => void
    followUser: (userId: number) => void
}

export const User = ({ user, isFollowingInProgress, followUser, unfollowUser }: Props) => {
    return (
        <div className={styles.user}>
            <div className={styles.subsBlock}>
                <NavLink to={`/profile/${user.id}`}>
                    <img
                        className={styles.userImg}
                        src={user.photos.large ? user.photos.large : userDefault}
                        alt={user.name}
                        width={50}
                        height={50}
                    />
                </NavLink>
                {user.followed ? (
                    <button
                        disabled={isFollowingInProgress.some(id => user.id === id)}
                        onClick={() => unfollowUser(user.id)}
                    >
                        Unfollow
                    </button>
                ) : (
                    <button
                        disabled={isFollowingInProgress.some(id => user.id === id)}
                        onClick={() => followUser(user.id)}
                    >
                        Follow
                    </button>
                )}
            </div>
            <div className={styles.info}>
                <h3 className={styles.username}>{user.name}</h3>
                <p className={styles.status}>{user.status}</p>
            </div>
        </div>
    )
}
