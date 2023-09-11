import { NavLink } from 'react-router-dom'

import styles from 'app/ui/header/header.module.scss'
import logo from 'common/img/logo.png'
import { RiLoginCircleLine, RiLogoutCircleLine } from 'react-icons/ri'
import { HeaderContainerPropsType } from 'app/ui/header/header-container'
import { Navbar } from 'common/components/navbar'

type Props = HeaderContainerPropsType

export const Header = ({ login, isAuth, logout }: Props) => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt="logotype" />
            <Navbar />
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
