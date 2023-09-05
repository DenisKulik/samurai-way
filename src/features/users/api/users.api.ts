import { instance, ResponseType } from 'common/api'
import { UsersResponseType } from 'features/users/api/users.api.types'

export const usersAPI = {
    getUsers(page: number = 1, pageSize: number = 5) {
        return instance
            .get<UsersResponseType>(`users?page=${page}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.post<ResponseType>(`follow/${userId}`, {}).then(response => response.data)
    },
    unfollow(userId: number) {
        return instance.delete<ResponseType>(`follow/${userId}`, {}).then(response => response.data)
    },
}
