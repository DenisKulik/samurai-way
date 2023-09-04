import styles from 'components/users/users.module.scss'
import { UsersContainerPropsType } from 'components/users/users-container'
import { Paginator } from 'components/common/paginator'
import { User } from 'components/users/user'

type Props = UsersContainerPropsType & {
    changePageNumber: (page: number) => void
}

export const Users = ({
    users,
    pageSize,
    totalUsersCount,
    currentPage,
    isFollowingInProgress,
    followUser,
    unfollowUser,
    changePageNumber,
}: Props) => {
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
