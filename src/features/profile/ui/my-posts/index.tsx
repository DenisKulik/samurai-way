import { memo } from 'react'

import styles from 'features/profile/ui/my-posts/my-posts.module.scss'
import { MyPostsPropsType } from 'features/profile/ui/my-posts/my-posts-container'
import AddPostForm, { AddPostFormDataType } from 'features/profile/ui/my-posts/add-post-form'
import { Post } from 'features/profile/ui/my-posts/post'

const MyPosts = memo((props: MyPostsPropsType) => {
    const { postsData, addPost } = props

    const onSubmit = (formData: AddPostFormDataType) => {
        addPost(formData.post)
    }

    const posts = postsData.map(post => (
        <Post key={post.id} message={post.message} likesCount={post.likesCount} />
    ))

    return (
        <div className={styles.container}>
            <h3 className={styles.heading}>My posts</h3>
            <AddPostForm onSubmit={onSubmit} />
            <div className={styles.posts}>{posts}</div>
        </div>
    )
})

export default MyPosts
