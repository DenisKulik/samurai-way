import axios from 'axios';
import styles from './Users.module.scss';
import { UsersPropsType } from './UsersContainer';
import userDefault from '../../img/user-default.png';

const Users = (props: UsersPropsType) => {
    const { usersPage, followUser, unfollowUser, setUsers } = props;

    if (!usersPage.users.length) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
             .then((response) => setUsers(response.data.items));
    }

    const userItems = usersPage.users.map((user) => (
        <div key={user.id} className={styles.userItem}>
            <div className={styles.userSubsBlock}>
                <img
                    src={user.photos.large ? user.photos.large : userDefault}
                    alt={user.name}
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
                    <h3 className={styles.username}>{user.name}</h3>
                    <p className={styles.userStatus}>{user.status}</p>
                </div>
                <p className={styles.userLocation}>
                    {`${'user.location.city'}, ${'user.location.country'}`}
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