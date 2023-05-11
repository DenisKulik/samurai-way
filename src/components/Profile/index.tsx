import ProfileInfo from './ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { ActionsTypes, StateType } from '../../redux/reduxStore';
import { Store } from 'redux';

type ProfilePropsType = {
    store: Store<StateType, ActionsTypes>
}

const Profile = ({ store }: ProfilePropsType) => {

    return (
        <>
            <ProfileInfo />
            <MyPostsContainer store={store} />
        </>
    );
};

export default Profile;