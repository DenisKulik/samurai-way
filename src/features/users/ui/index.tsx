import styles from 'features/users/ui/users.module.scss'
import { UsersContainerPropsType } from 'features/users/ui/users-container'
import { Paginator } from 'common/components/paginator'
import { User } from 'features/users/ui/user'
import { UsersSearchForm } from 'features/users/ui/users-search-form'
import { FilterType } from 'features/users/api/users.api.types'

type Props = UsersContainerPropsType & {
    changePageNumber: (page: number) => void
    changeUsersFilter: (filter: FilterType) => void
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
    changeUsersFilter,
}: Props) => {
    return (
        <>
            <div className={styles.users}>
                <UsersSearchForm changeUsersFilter={changeUsersFilter} />
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
