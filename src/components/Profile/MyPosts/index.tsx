import styles from './MyPosts.module.scss'
import { MyPostsPropsType } from './MyPostsContainer'
import Post from './Post'
import AddPostForm, { AddPostFormDataType } from './AddPostForm'

const MyPosts = (props: MyPostsPropsType) => {
    const { profile, addPost } = props

    const onSubmit = (formData: AddPostFormDataType) => {
        addPost(formData.post)
    }

    return (
        <div className={styles.container}>
            <h3 className={styles.heading}>My posts</h3>
            <AddPostForm onSubmit={onSubmit} />
            <div className={styles.posts}>
                {profile.postsData.map(post => (
                    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
                ))}
            </div>
        </div>
    )
}

export default MyPosts
