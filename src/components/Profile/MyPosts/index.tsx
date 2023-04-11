import styles from './MyPosts.module.scss';
import Post from './Post';

const MyPosts = () => {
    const postsData = [
        {
            id: 1,
            message: 'Have fun creating amazing things!',
            likesCount: 3
        },
        {
            id: 2,
            message: 'JavaScript powers modern web development.',
            likesCount: 5
        },
    ];

    return (
        <div className={ styles.container }>
            <h3 className={ styles.heading }>My posts</h3>
            <div className={ styles.postBox }>
                <textarea className={ styles.postField }
                          placeholder="Enter text"></textarea>
                <button className={ styles.redBtn }>Add post</button>
            </div>
            <div className={ styles.posts }>
                {
                    postsData.map(post => (
                        <Post key={ post.id } message={ post.message }
                              likesCount={ post.likesCount } />
                    ))
                }
            </div>
        </div>
    );
};

export default MyPosts;