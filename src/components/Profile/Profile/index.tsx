import styles from './ProfileInfo.module.scss';
import user from '../../../img/user.jpg';
import background from '../../../img/background.jpg';

const ProfileInfo = () => {
    return (
        (
            <div className={ styles.profileInfo }>
                <img className={ styles.backgroundImage } src={ background }
                     alt="background" />
                <div className={ styles.user }>
                    <img className={ styles.userImg } src={ user } alt="user" />
                    <h2 className={ styles.username }>Martin S.</h2>
                </div>
            </div>
        )
    );
};

export default ProfileInfo;