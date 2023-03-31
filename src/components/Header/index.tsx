import styles from './Header.module.scss';
import logo from '../../img/logo.png';

const Index = () => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt="logotype" />
        </header>
    );
};

export default Index;