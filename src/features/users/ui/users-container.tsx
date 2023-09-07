import { Component } from 'react'
import { connect } from 'react-redux'

import { AppStateType } from 'app/model/store'
import styles from 'features/users/ui/users.module.scss'
import {
    followUser,
    requestUsers,
    setCurrentPage,
    unfollowUser,
} from 'features/users/model/users.reducer'
import { Users } from 'features/users/ui/index'
import { Preloader } from 'common/components/preloader'
import {
    getCurrentPage,
    getIsFetching,
    getIsFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getUsersFilter,
} from 'features/users/model/users.selectors'
import { FilterType, UserType } from 'features/users/api/users.api.types'

export type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends Component<UsersContainerPropsType> {
    componentDidMount() {
        const { requestUsers, currentPage, pageSize } = this.props
        requestUsers(currentPage, pageSize, { term: '' })
    }

    changePageNumber = (page: number) => {
        const { filter, setCurrentPage, requestUsers } = this.props
        setCurrentPage(page)
        requestUsers(page, this.props.pageSize, filter)
    }

    changeUsersFilter = (filter: FilterType) => {
        const { pageSize, requestUsers } = this.props
        requestUsers(1, pageSize, filter)
    }

    render() {
        const { isFetching } = this.props

        return (
            <div className={styles.usersContainer}>
                {isFetching ? (
                    <Preloader />
                ) : (
                    <Users
                        changePageNumber={this.changePageNumber}
                        changeUsersFilter={this.changeUsersFilter}
                        {...this.props}
                    />
                )}
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    filter: getUsersFilter(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFollowingInProgress: getIsFollowingInProgress(state),
    isFetching: getIsFetching(state),
})

export default connect(mapStateToProps, {
    requestUsers,
    followUser,
    unfollowUser,
    setCurrentPage,
})(UsersContainer)

// types
type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    filter: FilterType
    totalUsersCount: number
    currentPage: number
    isFollowingInProgress: number[]
    isFetching: boolean
}
type MapDispatchToPropsType = {
    requestUsers: (currentPage: number, pageSize: number, filter: FilterType) => void
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
}
