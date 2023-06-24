import styles from './Users.module.scss';
import userDefault from '../../img/user-default.png';
import { UsersContainerPropsType } from './UsersContainer';

type UsersPropsType = UsersContainerPropsType & {
    changePageNumber: (page: number) => void
}

export const Users = (props: UsersPropsType) => {
    const { usersPage, unfollowUser, followUser, changePageNumber } = props;
    const { users, totalUsersCount, pageSize, currentPage } = usersPage;

    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

    return (
        <>
            <div>
                <div className={styles.users}>
                    {
                        users.map((user) => (
                            <div key={user.id} className={styles.userItem}>
                                <div className={styles.userSubsBlock}>
                                    <img
                                        src={user.photos.large ?
                                             user.photos.large :
                                             userDefault}
                                        alt={user.name}
                                        width={50}
                                        height={50}
                                    />
                                    {
                                        user.followed ? (
                                            <button onClick={() =>
                                                unfollowUser(user.id)}
                                            >
                                                Follow
                                            </button>
                                        ) : (
                                            <button onClick={() =>
                                                followUser(user.id)}
                                            >
                                                Unfollow
                                            </button>
                                        )
                                    }
                                </div>
                                <div className={styles.userInfo}>
                                    <div className={styles.userDetails}>
                                        <h3 className={styles.username}>{user.name}</h3>
                                        <p className={styles.userStatus}>{user.status}</p>
                                    </div>
                                    <p className={styles.userLocation}>
                                        {`${'user.location.city'}, ${'user.location.country'}`}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className={styles.navigation}>
                    {
                        pages.map(page => (
                            <span key={page}
                                  className={`${styles.page} ${
                                      currentPage ===
                                      page ?
                                      styles.selectedPage :
                                      ''}`}
                                  onClick={() => changePageNumber(page)}
                            >
                                {page}
                            </span>
                        ))
                    }
                </div>
            </div>
        </>
    );
};