import ProfileInfo from './ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { ProfileContainerPropsType } from './ProfileContainer';
import { Redirect } from 'react-router-dom';

type ProfilePropsType = ProfileContainerPropsType

export const Profile = ({ profilePage, auth }: ProfilePropsType) => {
    const { profile } = profilePage;

    if (!auth.isAuth) return <Redirect to="/login" />;

    return (
        <>
            <ProfileInfo profile={profile} />
            <MyPostsContainer />
        </>
    );
};