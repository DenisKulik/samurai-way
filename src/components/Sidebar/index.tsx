import styles from './Sidebar.module.scss';

const Sidebar = () => {
    return (
        <nav className={styles.sidebar}>
            <ul className={styles.nav}>
                <li className={styles.item}>
                    <a className={styles.active} href="/#">Profile</a>
                </li>
                <li className={styles.item}><a href="/#">Messages</a></li>
                <li className={styles.item}><a href="/#">News</a></li>
                <li className={styles.item}><a href="/#">Music</a></li>
                <li className={styles.item}><a href="/#">Settings</a></li>
            </ul>
        </nav>
    );
};

export default Sidebar;