import { connect } from 'react-redux';
import styles from './Users.module.scss';
import { AppStateType } from '../../redux/reduxStore';
import {
    followUser, InitialUsersStateType, setCurrentPage, setTotalUsersCount,
    setUsers, toggleIsFetching, unfollowUser, UserType
} from '../../redux/usersReducer';
import { Component } from 'react';
import { Users } from './index';
import { Preloader } from '../common/Preloader';
import { socialNetworkAPI } from '../../api/socialNetworkAPI';

export type UsersContainerPropsType = MapStateToPropsType
    & MapDispatchToPropsType

type MapStateToPropsType = {
    usersPage: InitialUsersStateType
}

type MapDispatchToPropsType = {
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetchingAC: boolean) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    usersPage: state.usersPage
});

class UsersContainer extends Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true);

        socialNetworkAPI
            .getUsers(this.props.usersPage.currentPage,
                this.props.usersPage.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    }

    changePageNumber = (page: number) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(page);

        socialNetworkAPI
            .getUsers(page, this.props.usersPage.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });
    };

    render = () => (
        <div className={styles.usersContainer}>
            {
                this.props.usersPage.isFetching ?
                <Preloader /> :
                <Users
                    changePageNumber={this.changePageNumber}
                    {...this.props}
                />
            }
        </div>
    );
}

export default connect(mapStateToProps, {
    followUser,
    unfollowUser,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
})(UsersContainer);