import { memo } from 'react'
import styles from './Dialog.module.scss'
import { NavLink } from 'react-router-dom'

type DialogType = {
    id: number
    name: string
    isActive: boolean
}

const Dialog = memo(({ id, name, isActive }: DialogType) => {
    return (
        <div className={`${styles.dialog} ${isActive ? styles.active : ''}`}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    )
})

export default Dialog
