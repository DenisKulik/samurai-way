import {
    profileReducer,
    addPost,
    setUserProfile,
    setUserStatus,
    InitialProfileStateType,
} from 'state/reducers/profile.reducer'
import { ContactsType, ProfileType } from 'api/common.api'

describe('profile-reducer', () => {
    let initialState: InitialProfileStateType

    beforeEach(() => {
        initialState = {
            profileData: {} as ProfileType,
            postsData: [
                {
                    id: 1,
                    message: 'Have fun creating amazing things!',
                    likesCount: 3,
                },
                {
                    id: 2,
                    message: 'JavaScript powers modern web development.',
                    likesCount: 5,
                },
            ],
            status: '',
        }
    })

    it('should add a new post to the state correctly', () => {
        const post = 'New post'
        const action = addPost(post)
        const newState = profileReducer(initialState, action)

        expect(newState.postsData.length).toBe(3)
        expect(newState.postsData[0].message).toBe(post)
        expect(newState.postsData[0].likesCount).toBe(0)
    })

    it('should set the user profile in the state correctly', () => {
        const profile = {
            userId: 1235,
            lookingForAJob: true,
            lookingForAJobDescription: 'react-developer',
            fullName: 'John Doe',
            contacts: {} as ContactsType,
            aboutMe: '',
            photos: {
                large: 'large',
                small: 'small',
            },
        }
        const action = setUserProfile(profile)
        const newState = profileReducer(initialState, action)

        expect(newState.profileData).toEqual(profile)
    })

    it('should set the user status in the state correctly', () => {
        const status = 'Online'
        const action = setUserStatus(status)
        const newState = profileReducer(initialState, action)

        expect(newState.status).toBe(status)
    })
})
