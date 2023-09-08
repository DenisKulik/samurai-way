import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import styles from 'features/login/ui/login.module.scss'
import LoginForm, { FormDataType } from 'features/login/ui/login-form'
import { login } from 'features/login/model/auth.reducer'
import { getCaptchaUrl, getIsAuth } from 'features/login/model/auth.selectors'

const Login = () => {
    const isAuth = useSelector(getIsAuth)
    const captchaUrl = useSelector(getCaptchaUrl)

    const dispatch = useDispatch()

    const onSubmit = (formData: FormDataType) => {
        dispatch(login(formData))
    }

    if (isAuth) return <Redirect to="profile" />

    return (
        <div className={styles.login}>
            <h1 className={styles.heading}>Login</h1>
            <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
        </div>
    )
}

export default Login
