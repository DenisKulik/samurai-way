import styles from './Users.module.scss'
import { UsersContainerPropsType } from './UsersContainer'
import { Paginator } from 'components/common/Paginator'
import { User } from 'components/Users/User'

type Props = UsersContainerPropsType & {
    changePageNumber: (page: number) => void
}

export const Users = (props: Props) => {
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
                    currentPageNumber={currentPage}
                    changePageNumber={changePageNumber}
                />
            </div>
        </>
    )
}
