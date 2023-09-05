import styles from 'features/users/ui/users.module.scss'
import { UsersContainerPropsType } from 'features/users/ui/users-container'
import { Paginator } from 'common/components/paginator'
import { User } from 'features/users/ui/user'

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
