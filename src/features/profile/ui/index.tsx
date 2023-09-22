import { ProfilePropsType } from 'features/profile/ui/profile-container'
import { ProfileHeader } from 'features/profile/ui/profile-header'
import { ProfileInfo } from 'features/profile/ui/profile-info'
import styles from './profile.module.scss'

export const Profile = (props: ProfilePropsType) => {
    const { profile, status, authorizedUserId, match, updateUserStatus, sendPhoto, updateProfile } =
        props
    const isOwner = !match.params.userId || Number(match.params.userId) === authorizedUserId

    return (
        <div className={styles.profile}>
            <ProfileHeader
                isOwner={isOwner}
                profile={profile}
                status={status}
                updateUserStatus={updateUserStatus}
                sendPhoto={sendPhoto}
            />
            <ProfileInfo isOwner={isOwner} profile={profile} updateProfile={updateProfile} />
        </div>
    )
}
