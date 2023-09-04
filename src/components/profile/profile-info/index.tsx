import { Component } from 'react'

import styles from 'components/profile/profile-info/profile-info.module.scss'
import background from 'img/background.jpg'
import { ProfileType } from 'api'
import { Preloader } from 'components/common/preloader'
import { ProfileStatus } from './profile-status'
import { ProfileData } from 'components/profile/profile-info/profile-data'
import { Avatar } from 'components/profile/profile-info/avatar'
import ProfileDataForm, {
    ProfileDataFormType,
} from 'components/profile/profile-info/profile-data-form'

type Props = {
    isOwner: boolean
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
    sendPhoto: (file: File) => void
    updateProfile: (profile: ProfileDataFormType) => Promise<any>
}

type State = {
    editMode: boolean
}

export class ProfileInfo extends Component<Props, State> {
    state = {
        editMode: false,
    }

    onEditProfile = () => {
        this.setState({
            editMode: true,
        })
    }

    onSubmit = (formData: ProfileDataFormType) => {
        this.props.updateProfile(formData).then(() => {
            this.setState({
                editMode: false,
            })
        })
    }

    render() {
        const { isOwner, profile, status, updateUserStatus, sendPhoto } = this.props
        if (!Object.keys(profile).length) return <Preloader />

        return (
            <div className={styles.profileInfo}>
                <div
                    className={styles.OwnerPageCover}
                    style={{ backgroundImage: `url(${background})` }}
                ></div>
                <div className={styles.content}>
                    <Avatar photos={profile.photos} isOwner={isOwner} callback={sendPhoto} />
                    {this.state.editMode ? (
                        <ProfileDataForm onSubmit={this.onSubmit} initialValues={profile} />
                    ) : (
                        <ProfileData
                            profile={profile}
                            isOwner={isOwner}
                            callback={this.onEditProfile}
                        />
                    )}
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
