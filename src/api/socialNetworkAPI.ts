import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
});

export const usersAPI = {
    getUsers(page: number = 1, pageSize: number = 5) {
        return instance
            .get<UsersResponseType>(`users?page=${page}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(userId: number) {
        return instance
            .post<ResponseType>(`follow/${userId}`, {})
            .then(response => response.data);
    },
    unfollow(userId: number) {
        return instance
            .delete<ResponseType>(`follow/${userId}`, {})
            .then(response => response.data);
    },
};

export const profileAPI = {
    getUserProfile(userId: string) {
        return instance
            .get<ProfileType>(`profile/${userId}`)
            .then(response => response.data);
    },
    getUserStatus(userId: string) {
        return instance
            .get<any>(`profile/status/${userId}`)
            .then(response => response.data);
    },
    updateUserStatus(status: string) {
        return instance
            .put<ResponseType>(`profile/status`, { status })
            .then(response => response.data);
    }
};

export const authAPI = {
    getAuthUser() {
        return instance
            .get<ResponseType<AuthResponseType>>(`auth/me`)
            .then(response => response.data);
    },
    login(data: LoginType) {
        return instance
            .post<ResponseType<{ userId: number }>>(`auth/login`, data)
            .then(response => response.data);
    },
    logout() {
        return instance
            .delete<ResponseType>(`auth/login`)
            .then(response => response.data);
    }
};

// types
export type UserType = {
    id: number
    name: string
    status: string
    photos: {
        large: string
        small: string
    }
    followed: boolean
}

export type ResponseType<T = {}> = {
    resultCode: number
    messages: string[]
    data: T
}

type UsersResponseType = {
    items: UserType[]
    totalCount: number
    error: string
}

type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: {
        large: string
        small: string
    }
}

export type AuthResponseType = {
    id: number
    email: string
    login: string
}

export type LoginType = {
    email: string
    password: string
    rememberMe: boolean
}