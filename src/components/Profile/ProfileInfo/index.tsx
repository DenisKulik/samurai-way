import styles from './ProfileInfo.module.scss';
import userDefault from '../../../img/user-default.png';
import background from '../../../img/background.jpg';
import { ProfileType } from '../../../redux/profileReducer';
import { Preloader } from '../../common/Preloader';

type ProfileInfoPropsType = {
    profile: ProfileType
}

const ProfileInfo = ({ profile }: ProfileInfoPropsType) => {
    if (!profile) return <Preloader />;

    return (
        <div className={styles.profileInfo}>
            <div className={styles.OwnerPageCover}
                 style={{ backgroundImage: `url(${background})` }}></div>
            <div className={styles.user}>
                <img className={styles.userImg}
                     src={profile.photos?.large || userDefault}
                     alt="user"
                     width={100}
                     height={100}
                />
                <div className={styles.inner}>
                    <h2 className={styles.username}>
                        {profile.fullName}
                        <span>online</span>
                    </h2>
                    <p className={styles.isLookingForAJob}>
                        Looking for a job: {
                        profile.lookingForAJob ?
                        'yes 🐱‍👤' :
                        'no 🙅‍♂️'
                    }
                    </p>
                    <p className={styles.status}>
                        {profile.lookingForAJobDescription}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;