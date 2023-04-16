import styles from './ProfileInfo.module.scss';
import user from '../../../img/user.jpg';
import background from '../../../img/background.jpg';

const ProfileInfo = () => {
    return (
        (
            <div className={ styles.profileInfo }>
                <div className={ styles.OwnerPageCover }
                     style={ { backgroundImage: `url(${ background })` } }></div>
                <div className={ styles.user }>
                    <img className={ styles.userImg } src={ user } alt="user"
                         width={ 100 } height={ 100 } />
                    <div className={ styles.inner }>
                        <h2 className={ styles.username }>
                            Liam Reynolds
                            <span>online</span>
                        </h2>
                        <p className={ styles.residence }>
                            Huntington Beach, California
                        </p>
                        <p className={ styles.status }>
                            Just spent the past 8 hours debugging my code.
                            Finally found the issue and feeling like a
                            programming wizard! 💻🧙‍♂️ #programmerlife #debugging
                            #codingstruggles</p>
                    </div>
                </div>
            </div>
        )
    );
};

export default ProfileInfo;