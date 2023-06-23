import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppStateType } from '../../redux/reduxStore';
import {
    followUserAC, InitialUsersStateType, setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unfollowUserAC, UserType
} from '../../redux/usersReducer';
import Users from './index';

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;