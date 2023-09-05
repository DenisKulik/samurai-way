export type PhotosType = {
    large: string
    small: string
}

export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}

export type UsersResponseType = {
    items: UserType[]
    totalCount: number
    error: string
}
