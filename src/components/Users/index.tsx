import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Users.module.scss'
import userDefault from '../../img/user-default.png'
import { UsersContainerPropsType } from './UsersContainer'

export const Users = memo((props: UsersPropsType) => {
    const {
        users,
        pageSize,
        totalUsersCount,
        currentPage,
        isFollowingInProgress,
        unfollowUser,
        followUser,
        changePageNumber,
    } = props
    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1)

    return (
        <>
            <div className={styles.users}>
                {users.map(user => (
                    <div key={user.id} className={styles.userItem}>
                        <div className={styles.userSubsBlock}>
                            <NavLink to={`/profile/${user.id}`}>
                                <img
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
                        <div className={styles.userInfo}>
                            <div className={styles.userDetails}>
                                <h3 className={styles.username}>{user.name}</h3>
                                <p className={styles.userStatus}>{user.status}</p>
                            </div>
                            <p className={styles.userLocation}>
                                {`${'user.location.city'}, ${'user.location.country'}`}
                            </p>
                        </div>
                    </div>
                ))}
                <div className={styles.navigation}>
                    {pages.map(page => (
                        <span
                            key={page}
                            className={`${styles.page} ${
                                currentPage === page ? styles.selectedPage : ''
                            }`}
                            onClick={() => changePageNumber(page)}
                        >
                            {page}
                        </span>
                    ))}
                </div>
            </div>
        </>
    )
})

// types
type UsersPropsType = UsersContainerPropsType & {
    changePageNumber: (page: number) => void
}
