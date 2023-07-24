import { NavLink } from 'react-router-dom'
import styles from './Sidebar.module.scss'
import {
    RiLayoutTopLine,
    RiMessage3Line,
    RiMusic2Line,
    RiSettings4Line,
    RiUser3Line,
} from 'react-icons/ri'
import { MdDeveloperMode } from 'react-icons/md'

const Sidebar = () => {
    return (
        <nav className={styles.sidebar}>
            <ul className={styles.nav}>
                <li className={styles.item}>
                    <NavLink to="/profile" activeClassName={styles.active}>
                        <RiUser3Line />
                        Profile
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/dialogs" activeClassName={styles.active}>
                        <RiMessage3Line />
                        Messages
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/users" activeClassName={styles.active}>
                        <MdDeveloperMode />
                        Developers
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/news" activeClassName={styles.active}>
                        <RiLayoutTopLine />
                        News
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/music" activeClassName={styles.active}>
                        <RiMusic2Line />
                        Music
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/settings" activeClassName={styles.active}>
                        <RiSettings4Line />
                        Settings
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Sidebar
