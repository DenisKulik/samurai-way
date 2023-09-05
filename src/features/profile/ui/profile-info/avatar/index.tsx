import { ChangeEvent } from 'react'

import styles from 'features/profile/ui/profile-info/profile-info.module.scss'
import userDefault from 'common/img/user-default.png'
import { PhotosType } from 'features/users/api/users.api.types'

type Props = {
    photos: PhotosType
    isOwner: boolean
    callback: (file: File) => void
}

export const Avatar = ({ photos, isOwner, callback }: Props) => {
    const onUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
        e.target?.files?.length && callback(e.target.files[0])
    }

    return (
        <div className={styles.avatar}>
            <img
                className={styles.userImg}
                src={photos?.large || userDefault}
                alt="user"
                width={100}
                height={100}
            />
            {isOwner && (
                <input
                    className={styles.uploadImg}
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    onChange={onUploadImage}
                />
            )}
        </div>
    )
}
