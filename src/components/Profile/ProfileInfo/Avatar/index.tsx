import { ChangeEvent } from 'react'

import styles from 'components/Profile/ProfileInfo/ProfileInfo.module.scss'
import userDefault from 'img/user-default.png'
import { PhotosType } from 'api'

type Props = {
    photos: PhotosType
    isOwner: boolean
    callback: (file: File) => void
}

export const Avatar = (props: Props) => {
    const { photos, isOwner, callback } = props

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
