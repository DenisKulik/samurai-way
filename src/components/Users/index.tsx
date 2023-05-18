import { UsersPropsType } from './UsersContainer';
import styles from './Users.module.scss';

const Users = (props: UsersPropsType) => {
    const { usersPage, followUser, unfollowUser } = props;

    const userItems = usersPage.users.map((user) => (
        <div key={user.id} className={styles.userItem}>
            <div className={styles.userSubsBlock}>
                <img
                    src={user.photoUrl}
                    alt={user.fullName}
                    width={50}
                    height={50}
                />
                {
                    user.followed ? (
                        <button onClick={() => unfollowUser(user.id)}>
                            Follow
                        </button>
                    ) : (
                        <button onClick={() => followUser(user.id)}>
                            Unfollow
                        </button>
                    )
                }
            </div>
            <div className={styles.userInfo}>
                <div className={styles.userDetails}>
                    <h3 className={styles.username}>{user.fullName}</h3>
                    <p className={styles.userStatus}>{user.status}</p>
                </div>
                <p className={styles.userLocation}>
                    {`${user.location.city}, ${user.location.country}`}
                </p>
            </div>
        </div>
    ));

    return (
        <div className={styles.users}>
            {userItems}
        </div>
    );
};

export default Users;