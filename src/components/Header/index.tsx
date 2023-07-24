import styles from './Header.module.scss'
import logo from '../../img/logo.png'
import { NavLink } from 'react-router-dom'
import { RiLoginCircleLine, RiLogoutCircleLine } from 'react-icons/ri'
import { HeaderContainerPropsType } from './HeaderContainer'

type HeaderPropsType = HeaderContainerPropsType

const Header = (props: HeaderPropsType) => {
    const { logout } = props
    const { isAuth, login } = props.auth

    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt="logotype" />
            <div className={styles.login}>
                {isAuth ? (
                    <>
                        <div className={styles.user}>{login}</div>
                        <NavLink to={'/login'} onClick={logout}>
                            Logout
                            <RiLogoutCircleLine />
                        </NavLink>
                    </>
                ) : (
                    <NavLink to={'/login'} activeClassName={styles.active}>
                        Login
                        <RiLoginCircleLine />
                    </NavLink>
                )}
            </div>
        </header>
    )
}

export default Header
