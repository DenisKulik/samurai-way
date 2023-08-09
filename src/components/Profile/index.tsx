import { memo } from 'react'
import ProfileInfo from './ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import { ProfileContainerPropsType } from './ProfileContainer'

export const Profile = memo((props: ProfilePropsType) => {
    const { profile, status, authorizedUserId, match, updateUserStatus } = props
    const isOwner = !match.params.userId || Number(match.params.userId) === authorizedUserId

    return (
        <>
            <ProfileInfo
                isOwner={isOwner}
                profile={profile}
                status={status}
                updateUserStatus={updateUserStatus}
            />
            <MyPostsContainer />
        </>
    )
})

// types
type ProfilePropsType = ProfileContainerPropsType
