import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/reduxStore';
import {
    followUserAC, InitialUsersStateType, setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unfollowUserAC, UserType
} from '../../redux/usersReducer';
import { Component } from 'react';
import axios from 'axios';
import { Users } from './index';

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
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage
    };
};

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        followUser: (userId: number) => dispatch(followUserAC(userId)),
        unfollowUser: (userId: number) => dispatch(unfollowUserAC(userId)),
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
        setCurrentPage: (currentPage: number) => dispatch(
            setCurrentPageAC(currentPage)),
        setTotalUsersCount: (totalUsersCount: number) => dispatch(
            setTotalUsersCountAC(totalUsersCount)),
    };
};

class UsersContainer extends Component<UsersContainerPropsType> {
    componentDidMount() {
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${
                this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
             .then((response) => {
                 this.props.setUsers(response.data.items);
                 this.props.setTotalUsersCount(response.data.totalCount);
             });
    }

    changePageNumber = (page: number) => {
        this.props.setCurrentPage(page);

        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${
                this.props.usersPage.pageSize}`)
             .then((response) => this.props.setUsers(response.data.items));
    };

    render = () => (
        <Users changePageNumber={this.changePageNumber} {...this.props} />
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);