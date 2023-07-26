import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Users.module.scss'
import userDefault from '../../img/user-default.png'
import { UsersContainerPropsType } from './UsersContainer'
import { Paginator } from 'components/Users/Paginator'

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
                <Paginator
                    pageSize={pageSize}
                    totalUsersCount={totalUsersCount}
                    currentPage={currentPage}
                    changePageNumber={changePageNumber}
                />
            </div>
        </>
    )
})

// types
type UsersPropsType = UsersContainerPropsType & {
    changePageNumber: (page: number) => void
}
