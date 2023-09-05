import { connect } from 'react-redux'

import { addPost, PostType } from 'state/reducers/profile.reducer'
import { AppStateType, AppThunkDispatch } from 'state/store'
import MyPosts from './index'
import { getPostsData } from 'state/selectors/profile.selectors'

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
