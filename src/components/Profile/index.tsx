import MyPosts from './MyPosts';
import ProfileInfo from './ProfileInfo';
import { PostType } from '../../redux/state';

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