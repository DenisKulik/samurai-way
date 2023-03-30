import background from '../img/background.jpg';
import user from '../img/user.jpg';

const Profile = () => {
    return (
        <div className="content">
            <div>
                <div>
                    <img className="backgroundImage" src={background}
                         alt="background" />
                </div>
                <div className="userInfo">
                    <img className="userImg" src={user} alt="user" />
                    <h2 className="username">Martin S.</h2>
                </div>
                <div>
                    <h3>My posts</h3>
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            post 1
                        </div>
                        <div>
                            post 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;