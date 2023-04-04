import styles from './Sidebar.module.scss';

const Sidebar = () => {
    return (
        <nav className={ styles.sidebar }>
            <ul className={ styles.nav }>
                <li className={ styles.item }>
                    <a href="/profile">Profile</a>
                </li>
                <li className={ styles.item }>
                    <a href="/dialogs">Messages</a>
                </li>
                <li className={ styles.item }><a href="/#">News</a></li>
                <li className={ styles.item }><a href="/#">Music</a></li>
                <li className={ styles.item }><a href="/#">Settings</a></li>
            </ul>
        </nav>
    );
};

export default Sidebar;