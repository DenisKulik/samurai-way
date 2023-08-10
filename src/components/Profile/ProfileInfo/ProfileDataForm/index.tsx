import styles from 'components/Profile/ProfileInfo/ProfileInfo.module.scss'
import { ProfileType } from 'api/socialNetworkAPI'
import { Contact } from 'components/Profile/Contact'

export const ProfileDataForm = ({ profile, callback }: ProfileDataFormPropsType) => {
    const contacts = Object.entries(profile.contacts).map(([title, value]) => {
        return <Contact key={title} title={title} value={value} />
    })

    return (
        <form className={styles.inner}>
            <div>
                <span className={styles.username}>{profile.fullName}</span>
                <button onClick={callback}>Save</button>
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
            {contacts.length > 0 && <div className={styles.contacts}>Contacts: {contacts}</div>}
        </form>
    )
}

type ProfileDataFormPropsType = {
    profile: ProfileType
    callback: () => void
}
