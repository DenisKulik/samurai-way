import { connect } from 'react-redux'

import { addPost, PostType } from 'features/profile/model/profile.reducer'
import { AppStateType, AppThunkDispatch } from 'app/model/store'
import MyPosts from 'features/profile/ui/my-posts/index'
import { getPostsData } from 'features/profile/model/profile.selectors'

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    postsData: PostType[]
}

type MapDispatchToPropsType = {
    addPost: (post: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    postsData: getPostsData(state),
})

const mapDispatchToProps = (dispatch: AppThunkDispatch): MapDispatchToPropsType => ({
    addPost: (post: string) => dispatch(addPost(post)),
})

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
