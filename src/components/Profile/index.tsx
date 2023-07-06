import ProfileInfo from './ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { ProfileContainerPropsType } from './ProfileContainer';

type ProfilePropsType = ProfileContainerPropsType

export const Profile = ({ profilePage }: ProfilePropsType) => {
    const { profile } = profilePage;

    return (
        <>
            <ProfileInfo profile={profile} />
            <MyPostsContainer />
        </>
    );
};