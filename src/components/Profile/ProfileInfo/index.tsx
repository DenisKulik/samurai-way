import styles from './ProfileInfo.module.scss'
import background from 'img/background.jpg'
import { ProfileType } from 'api/socialNetworkAPI'
import { Preloader } from 'components/common/Preloader'
import { ProfileStatus } from './ProfileStatus'
import { ProfileData } from 'components/Profile/ProfileInfo/ProfileData'
import { Avatar } from 'components/Profile/ProfileInfo/Avatar'
import { ProfileDataForm } from 'components/Profile/ProfileInfo/ProfileDataForm'
import { Component } from 'react'

export class ProfileInfo extends Component<ProfileInfoPropsType, ProfileStateType> {
    state: ProfileStateType = {
        editMode: false,
    }

    onEditProfile = () => {
        this.setState({
            editMode: true,
        })
    }

    onSaveProfileChanges = () => {
        this.setState({
            editMode: false,
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
                        <ProfileDataForm profile={profile} callback={this.onSaveProfileChanges} />
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

// types
type ProfileInfoPropsType = {
    isOwner: boolean
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
    sendPhoto: (file: File) => void
}
type ProfileStateType = {
    editMode: boolean
}
