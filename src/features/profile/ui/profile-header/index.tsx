import { Component } from 'react'

import styles from 'features/profile/ui/profile-header/profile-header.module.scss'
import background from 'common/img/background.jpg'
import { ProfileType } from 'features/profile/api/profile.api.types'
import { Preloader } from 'common/components/preloader'
import { Avatar } from 'features/profile/ui/profile-header/avatar'
import { ProfileStatus } from 'features/profile/ui/profile-header/profile-status'

type Props = {
    isOwner: boolean
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
    sendPhoto: (file: File) => void
}

type State = {
    editMode: boolean
}

export class ProfileHeader extends Component<Props, State> {
    state = {
        editMode: false,
    }

    onEditProfile = () => {
        this.setState({
            editMode: true,
        })
    }

    render() {
        const { isOwner, profile, status, updateUserStatus, sendPhoto } = this.props
        if (!Object.keys(profile).length) return <Preloader />

        return (
            <div className={styles.header}>
                <div
                    className={styles.cover}
                    style={{ backgroundImage: `url(${background})` }}
                ></div>
                <div className={styles.content}>
                    <Avatar photos={profile.photos} isOwner={isOwner} callback={sendPhoto} />
                    <span className={styles.username}>{profile.fullName}</span>
                    <ProfileStatus
                        editable={isOwner}
                        status={status}
                        updateUserStatus={updateUserStatus}
                    />
                </div>
            </div>
        )
    }
}
