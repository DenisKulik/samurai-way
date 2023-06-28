import ProfileInfo from './ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { ProfileContainerPropsType } from './ProfileContainer';

type ProfilePropsType = ProfileContainerPropsType

export const Profile = (props: ProfilePropsType) => {
    const { profile } = props.profilePage;

    return (
        <>
            <ProfileInfo profile={profile} />
            <MyPostsContainer />
        </>
    );
};