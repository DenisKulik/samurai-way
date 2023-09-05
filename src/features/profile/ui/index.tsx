import { ProfilePropsType } from 'features/profile/ui/profile-container'
import { ProfileInfo } from 'features/profile/ui/profile-info'
import { MyPostsContainer } from 'features/profile/ui/my-posts/my-posts-container'

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
