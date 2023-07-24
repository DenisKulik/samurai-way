import { connect } from 'react-redux'
import styles from './Users.module.scss'
import { AppStateType } from '../../redux/reduxStore'
import { followUser, requestUsers, setCurrentPage, unfollowUser } from '../../redux/usersReducer'
import { Component } from 'react'
import { Users } from './index'
import { Preloader } from '../common/Preloader'
import {
    getCurrentPage,
    getIsFetching,
    getIsFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers,
} from '../../redux/usersSelectors'
import { UserType } from '../../api/socialNetworkAPI'

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFollowingInProgress: getIsFollowingInProgress(state),
    isFetching: getIsFetching(state),
})

class UsersContainer extends Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    changePageNumber = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.requestUsers(page, this.props.pageSize)
    }

    render = () => (
        <div className={styles.usersContainer}>
            {this.props.isFetching ? (
                <Preloader />
            ) : (
                <Users changePageNumber={this.changePageNumber} {...this.props} />
            )}
        </div>
    )
}

export default connect(mapStateToProps, {
    requestUsers,
    followUser,
    unfollowUser,
    setCurrentPage,
})(UsersContainer)

// types
export type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFollowingInProgress: number[]
    isFetching: boolean
}

type MapDispatchToPropsType = {
    requestUsers: (currentPage: number, pageSize: number) => void
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
}
