import { PostType } from '../../index';
import MyPosts from './MyPosts';
import ProfileInfo from './ProfileInfo';

type ProfilePropsType = {
    postsData: PostType[]
}

const Profile = (props: ProfilePropsType) => {
    const { postsData } = props;

    return (
        <>
            <ProfileInfo />
            <MyPosts postsData={ postsData } />
        </>
    );
};

export default Profile;