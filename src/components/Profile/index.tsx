import MyPosts from './MyPosts';
import ProfileInfo from './ProfileInfo';
import { ActionType, PostType } from '../../redux/state';

type ProfilePropsType = {
    postsData: PostType[]
    currentPostText: string
    dispatch: (action: ActionType) => void
}

const Profile = (props: ProfilePropsType) => {
    const {
        postsData,
        currentPostText,
        dispatch
    } = props;

    return (
        <>
            <ProfileInfo />
            <MyPosts
                postsData={ postsData }
                currentPostText={ currentPostText }
                dispatch={ dispatch }
            />
        </>
    );
};

export default Profile;