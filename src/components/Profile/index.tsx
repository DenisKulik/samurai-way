import MyPosts from './MyPosts';
import ProfileInfo from './ProfileInfo';
import { ActionType, PostType } from '../../redux/state';

type ProfilePropsType = {
    postsData: PostType[]
    newPostText: string
    dispatch: (action: ActionType) => void
}

const Profile = (props: ProfilePropsType) => {
    const {
        postsData,
        newPostText,
        dispatch
    } = props;

    return (
        <>
            <ProfileInfo />
            <MyPosts
                postsData={ postsData }
                newPostText={ newPostText }
                dispatch={ dispatch }
            />
        </>
    );
};

export default Profile;