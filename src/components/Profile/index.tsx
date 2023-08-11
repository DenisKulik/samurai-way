import { ProfileInfo } from './ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import { ProfilePropsType } from './ProfileContainer'

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
