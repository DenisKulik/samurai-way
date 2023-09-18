import { ProfilePropsType } from 'features/profile/ui/profile-container'
import { ProfileInfo } from 'features/profile/ui/profile-info'
import styles from './profile.module.scss'

export const Profile = (props: ProfilePropsType) => {
    const { profile, status, authorizedUserId, match, updateUserStatus, sendPhoto, updateProfile } =
        props
    const isOwner = !match.params.userId || Number(match.params.userId) === authorizedUserId

    return (
        <div className={styles.profile}>
            <ProfileInfo
                isOwner={isOwner}
                profile={profile}
                status={status}
                updateUserStatus={updateUserStatus}
                sendPhoto={sendPhoto}
                updateProfile={updateProfile}
            />
        </div>
    )
}
