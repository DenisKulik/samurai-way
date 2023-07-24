import { memo } from 'react'
import ProfileInfo from './ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import { ProfileContainerPropsType } from './ProfileContainer'

type ProfilePropsType = ProfileContainerPropsType

export const Profile = memo((props: ProfilePropsType) => {
    const { profile, status, updateUserStatus } = props

    return (
        <>
            <ProfileInfo profile={profile} status={status} updateUserStatus={updateUserStatus} />
            <MyPostsContainer />
        </>
    )
})
