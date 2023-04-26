import MyPosts from './MyPosts';
import ProfileInfo from './ProfileInfo';
import { PostType } from '../../redux/state';

type ProfilePropsType = {
    postsData: PostType[]
    currentPostText: string
    addPost: () => void
    updateCurrentPostText: (currentPost: string) => void
}

const Profile = (props: ProfilePropsType) => {
    const {
        postsData,
        currentPostText,
        addPost,
        updateCurrentPostText
    } = props;

    return (
        <>
            <ProfileInfo />
            <MyPosts postsData={ postsData } currentPostText={ currentPostText }
                     addPost={ addPost }
                     updateCurrentPostText={ updateCurrentPostText } />
        </>
    );
};

export default Profile;