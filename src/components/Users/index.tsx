import { memo } from 'react'
import styles from './Users.module.scss'
import { UsersContainerPropsType } from './UsersContainer'
import { Paginator } from 'components/Users/Paginator'
import { User } from 'components/Users/User'

export const Users = memo((props: UsersPropsType) => {
    const {
        users,
        pageSize,
        totalUsersCount,
        currentPage,
        isFollowingInProgress,
        followUser,
        unfollowUser,
        changePageNumber,
    } = props

    return (
        <>
            <div className={styles.users}>
                {users.map(user => (
                    <User
                        key={user.id}
                        user={user}
                        isFollowingInProgress={isFollowingInProgress}
                        unfollowUser={unfollowUser}
                        followUser={followUser}
                    />
                ))}
                <Paginator
                    pageSize={pageSize}
                    totalItemsCount={totalUsersCount}
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
