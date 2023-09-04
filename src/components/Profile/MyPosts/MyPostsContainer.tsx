import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import { addPost, PostType } from 'state/reducers/profile.reducer'
import { AppStateType } from 'state/store'
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

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
    addPost: (post: string) => dispatch(addPost(post)),
})

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
