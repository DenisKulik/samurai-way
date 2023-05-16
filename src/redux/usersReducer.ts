import { ActionsTypes } from './reduxStore';
import userDefault from '../img/user-default.png';

type LocationType = {
    city: string,
    country: string
}

export type UserType = {
    id: number,
    fullName: string,
    photoUrl: string
    status: string,
    followed: boolean
    location: LocationType
}

export type InitialUsersStateType = {
    users: UserType[]
};

const initialState: InitialUsersStateType = {
    users: [
        {
            id: 1,
            fullName: 'John Smith',
            photoUrl: userDefault,
            status: 'Currently employed',
            followed: true,
            location: {
                city: 'New York City',
                country: 'USA'
            }
        },
        {
            id: 2,
            fullName: 'Luisa Hernandez',
            photoUrl: userDefault,
            status: 'Freelance designer',
            followed: false,
            location: {
                city: 'Mexico City',
                country: 'Mexico'
            }
        },
        {
            id: 3,
            fullName: 'Hiroshi Tanaka',
            photoUrl: userDefault,
            status: 'Entrepreneur',
            followed: false,
            location: {
                city: 'Tokyo',
                country: 'Japan'
            }
        },
        {
            id: 4,
            fullName: 'Maria Garcia',
            photoUrl: userDefault,
            status: 'Recent college graduate',
            followed: false,
            location: {
                city: 'Madrid',
                country: 'Spain'
            }
        },
    ]
};

export const followUserAC = (userId: number) =>
    ({ type: 'FOLLOW', userId } as const);
export const unfollowUserAC = (userId: number) =>
    ({ type: 'UNFOLLOW', userId } as const);
export const setUsersAC = (users: UserType[]) =>
    ({ type: 'SET-USERS', users } as const);

const usersReducer = (
    state: InitialUsersStateType = initialState, action: ActionsTypes
): InitialUsersStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ?
                    { ...user, followed: true } : user)
            };
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(user => user.id === action.userId ?
                    { ...user, followed: false } : user)
            };
        case 'SET-USERS':
            return { ...state, users: [ ...state.users, ...action.users ] };
        default:
            return state;
    }
};

export default usersReducer;