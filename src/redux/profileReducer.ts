import { AppActionsType, AppThunkType } from './reduxStore';
import { Dispatch } from 'redux';
import { profileAPI, ProfileType } from '../api/socialNetworkAPI';

const initialState: InitialProfileStateType = {
    profile: {} as ProfileType,
    postsData: [
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
    ],
    status: ''
};

export const profileReducer = (
    state: InitialProfileStateType = initialState, action: ProfileActionsType
): InitialProfileStateType => {
    switch (action.type) {
        case 'ADD-POST':
            debugger
            return {
                ...state,
                postsData: [ {
                    id: new Date().getTime(),
                    message: action.post,
                    likesCount: 0
                }, ...state.postsData ]
            };
        case 'SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile
            };
        case 'SET-USER-STATUS':
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
};

// actions
export const addPost = (post: string) => ({ type: 'ADD-POST', post } as const);
export const setUserProfile = (profile: ProfileType) =>
    ({ type: 'SET-USER-PROFILE', profile } as const);
export const setUserStatus = (status: string) =>
    ({ type: 'SET-USER-STATUS', status } as const);

// thunks
export const getUserProfile = (userId: string): AppThunkType => async (
    dispatch: Dispatch<AppActionsType>
) => {
    try {
        const res = await profileAPI.getUserProfile(userId);
        dispatch(setUserProfile(res));
    } catch (e) {
        console.error(e);
    }
};

export const getUserStatus = (userId: string): AppThunkType => async (
    dispatch: Dispatch<AppActionsType>
) => {
    try {
        const res = await profileAPI.getUserStatus(userId);
        dispatch(setUserStatus(res));
    } catch (e) {
        console.error(e);
    }
};

export const updateUserStatus = (status: string): AppThunkType => async (
    dispatch: Dispatch<AppActionsType>
) => {
    try {
        const res = await profileAPI.updateUserStatus(status);
        if (res.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    } catch (e) {
        console.error(e);
    }
};

// types
export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type InitialProfileStateType = {
    profile: ProfileType
    postsData: PostType[]
    status: string
};

export type ProfileActionsType =
    | ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>
