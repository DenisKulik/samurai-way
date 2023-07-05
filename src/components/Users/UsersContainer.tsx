import { connect } from 'react-redux';
import styles from './Users.module.scss';
import { AppStateType } from '../../redux/reduxStore';
import {
    followUser, getUsers, InitialUsersStateType, setCurrentPage, unfollowUser
} from '../../redux/usersReducer';
import { Component } from 'react';
import { Users } from './index';
import { Preloader } from '../common/Preloader';

export type UsersContainerPropsType = MapStateToPropsType
    & MapDispatchToPropsType

type MapStateToPropsType = {
    usersPage: InitialUsersStateType
}

type MapDispatchToPropsType = {
    getUsers: (currentPage: number, pageSize: number) => void
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    usersPage: state.usersPage
});

class UsersContainer extends Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.usersPage.currentPage,
            this.props.usersPage.pageSize);
    }

    changePageNumber = (page: number) => {
        this.props.setCurrentPage(page);
        this.props.getUsers(page, this.props.usersPage.pageSize);
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
    getUsers,
    followUser,
    unfollowUser,
    setCurrentPage
})(UsersContainer);