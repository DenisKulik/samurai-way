import { Contact } from 'features/profile/ui/contact'
import styles from 'features/profile/ui/profile-info/profile-info.module.scss'
import { ProfileType } from 'features/profile/api/profile.api.types'

type Props = {
    profile: ProfileType
    isOwner: boolean
    callback: () => void
}

export const ProfileData = ({ profile, isOwner, callback }: Props) => {
    const contacts = Object.entries(profile.contacts)
        .filter(([_, value]) => value)
        .map(([title, value]) => {
            return <Contact key={title} title={title} value={value} />
        })

    return (
        <div className={styles.inner}>
            <div>
                <span className={styles.username}>{profile.fullName}</span>
                {isOwner && <button onClick={callback}>Edit</button>}
            </div>
            <div className={styles.jobInfo}>
                <span>
                    {profile.lookingForAJob
                        ? 'Looking for a job 🐱‍💻'
                        : 'Not looking for a job 😎'}
                </span>
                {profile.lookingForAJob && (
                    <p>{`My skills: ${profile.lookingForAJobDescription}`}</p>
                )}
            </div>
            <div>{profile.aboutMe && `About me: ${profile.aboutMe}`}</div>
            {contacts.length > 0 && <div className={styles.contacts}>Contacts: {contacts}</div>}
        </div>
    )
}
