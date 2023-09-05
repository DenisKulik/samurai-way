import styles from 'features/messages/ui/dialog/dialog.module.scss'
import { NavLink } from 'react-router-dom'

type Props = {
    id: number
    name: string
    isActive: boolean
}

export const Dialog = ({ id, name, isActive }: Props) => {
    return (
        <div className={`${styles.dialog} ${isActive ? styles.active : ''}`}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    )
}
