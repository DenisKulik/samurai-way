import MyPosts from './MyPosts';
import ProfileInfo from './ProfileInfo';
import { PostType } from '../../redux/state';

type ProfilePropsType = {
    postsData: PostType[]
    addPost: (postMessage: string) => void
}

const Profile = (props: ProfilePropsType) => {
    const { postsData, addPost } = props;

    return (
        <>
            <ProfileInfo />
            <MyPosts postsData={ postsData } addPost={ addPost } />
        </>
    );
};

export default Profile;