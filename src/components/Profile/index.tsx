import MyPosts from './MyPosts';
import ProfileInfo from './ProfileInfo';
import { PostType } from '../../redux/profileReducer';
import { ActionsTypes } from '../../redux/reduxStore';

type ProfilePropsType = {
    postsData: PostType[]
    newPostText: string
    dispatch: (action: ActionsTypes) => void
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
                postsData={postsData}
                newPostText={newPostText}
                dispatch={dispatch}
            />
        </>
    );
};

export default Profile;