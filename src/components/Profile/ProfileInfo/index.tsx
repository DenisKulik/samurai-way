import { ChangeEvent, memo } from 'react'
import styles from './ProfileInfo.module.scss'
import userDefault from 'img/user-default.png'
import background from 'img/background.jpg'
import { ProfileType } from 'api/socialNetworkAPI'
import { Preloader } from 'components/common/Preloader'
import { ProfileStatus } from './ProfileStatus'

const ProfileInfo = memo((props: ProfileInfoPropsType) => {
    const { isOwner, profile, status, updateUserStatus, sendPhoto } = props
    if (!profile) return <Preloader />

    const onUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target?.files?.length) {
            sendPhoto(e.target.files[0])
        }
    }

    return (
        <div className={styles.profileInfo}>
            <div
                className={styles.OwnerPageCover}
                style={{ backgroundImage: `url(${background})` }}
            ></div>
            <div className={styles.user}>
                <div className={styles.avatar}>
                    <img
                        className={styles.userImg}
                        src={profile.photos?.large || userDefault}
                        alt="user"
                        width={100}
                        height={100}
                    />
                    {isOwner && (
                        <input
                            className={styles.uploadImg}
                            type="file"
                            accept=".jpg, .jpeg, .png"
                            onChange={onUploadImage}
                        />
                    )}
                </div>
                <div className={styles.inner}>
                    <h2 className={styles.username}>
                        {profile.fullName}
                        <span>online</span>
                    </h2>
                    <ProfileStatus
                        editable={isOwner}
                        status={status}
                        updateUserStatus={updateUserStatus}
                    />
                </div>
                <div className={styles.jobInfo}>
                    <p>Looking for a job: {profile.lookingForAJob ? 'yes 🐱‍👤' : 'no 🙅‍♂️'}</p>
                    <p>{profile.lookingForAJobDescription}</p>
                </div>
            </div>
        </div>
    )
})

export default ProfileInfo

// types
type ProfileInfoPropsType = {
    isOwner: boolean
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
    sendPhoto: (file: File) => void
}
