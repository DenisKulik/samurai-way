import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './User.module.scss'
import userDefault from 'img/user-default.png'
import { UserType } from 'api/socialNetworkAPI'

export const User = memo((props: UserPropsType) => {
    const { user, isFollowingInProgress, followUser, unfollowUser } = props

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
                <div className={styles.details}>
                    <h3 className={styles.username}>{user.name}</h3>
                    <p className={styles.status}>{user.status}</p>
                </div>
                <p className={styles.location}>
                    {`${'user.location.city'}, ${'user.location.country'}`}
                </p>
            </div>
        </div>
    )
})

// types
type UserPropsType = {
    user: UserType
    isFollowingInProgress: number[]
    unfollowUser: (userId: number) => void
    followUser: (userId: number) => void
}