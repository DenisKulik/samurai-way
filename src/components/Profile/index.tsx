import styles from './Profile.module.scss';
import background from '../../img/background.jpg';
import user from '../../img/user.jpg';
import MyPosts from './MyPosts';

const Profile = () => {
    return (
        <>
            <div className={ styles.header }>
                <img className={ styles.backgroundImage } src={ background }
                     alt="background" />
                <div className={ styles.userInfo }>
                    <img className={ styles.userImg } src={ user } alt="user" />
                    <h2 className={ styles.username }>Martin S.</h2>
                </div>
            </div>
            <MyPosts />
        </>
    );
};

export default Profile;