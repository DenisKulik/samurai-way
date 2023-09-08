import { useDispatch, useSelector } from 'react-redux'

import styles from 'features/users/ui/users-list/users-list.module.scss'
import { UsersList } from 'features/users/ui/users-list'
import { Preloader } from 'common/components/preloader'
import {
    getCurrentPage,
    getIsFetching,
    getPageSize,
    getUsersFilter,
} from 'features/users/model/users.selectors'
import { useEffect } from 'react'
import { requestUsers } from 'features/users/model/users.reducer'

const Users = () => {
    const isFetching = useSelector(getIsFetching)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize, filter))
        // eslint-disable-next-line
    }, [])

    return <div className={styles.usersContainer}>{isFetching ? <Preloader /> : <UsersList />}</div>
}

export default Users
