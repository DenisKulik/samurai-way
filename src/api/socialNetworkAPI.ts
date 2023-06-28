import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
});

export const socialNetworkAPI = {
    getAuthUser() {
        return instance
            .get(`auth/me`)
            .then(response => response.data);
    },
    getUsers(page: number = 1, pageSize: number = 5) {
        return instance
            .get(`users?page=${page}&count=${pageSize}`)
            .then(response => response.data);
    },
    getUserProfile(userId: string) {
        return instance
            .get(`profile/${userId}`)
            .then(response => response.data);
    },
    followUser(userId: number) {
        return instance
            .post(`follow/${userId}`, {},)
            .then(response => response.data);
    },
    unfollowUser(userId: number) {
        return instance
            .delete(`follow/${userId}`, {},)
            .then(response => response.data);
    },
};
