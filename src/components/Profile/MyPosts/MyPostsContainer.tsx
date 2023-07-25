import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { addPost, PostType } from 'redux/profileReducer'
import { AppStateType } from 'redux/store'
import MyPosts from './index'
import { getPostsData } from 'redux/profileSelectors'

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
