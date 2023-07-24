import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { addPost, InitialProfileStateType } from '../../../redux/profileReducer'
import { AppStateType } from '../../../redux/reduxStore'
import MyPosts from './index'

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    profile: InitialProfileStateType
}

type MapDispatchToPropsType = {
    addPost: (post: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage,
})

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
    addPost: (post: string) => dispatch(addPost(post)),
})

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
