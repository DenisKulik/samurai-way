import { ProfilePropsType } from 'components/profile/profile-container'
import { ProfileInfo } from 'components/profile/profile-info'
import { MyPostsContainer } from 'components/profile/my-posts/my-posts-container'

export const Profile = (props: ProfilePropsType) => {
    const { profile, status, authorizedUserId, match, updateUserStatus, sendPhoto, updateProfile } =
        props
    const isOwner = !match.params.userId || Number(match.params.userId) === authorizedUserId

    return (
        <>
            <ProfileInfo
                isOwner={isOwner}
                profile={profile}
                status={status}
                updateUserStatus={updateUserStatus}
                sendPhoto={sendPhoto}
                updateProfile={updateProfile}
            />
            <MyPostsContainer />
        </>
    )
}
