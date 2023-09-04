import { memo } from 'react'
import { connect } from 'react-redux'
import styles from './Login.module.scss'
import LoginForm, { FormDataType } from './LoginForm'
import { login } from 'state/reducers/auth.reducer'
import { LoginType } from 'api'
import { Redirect } from 'react-router-dom'
import { AppStateType } from 'state/store'

const Login = memo(({ isAuth, captchaUrl, login }: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        login(formData)
    }

    if (isAuth) return <Redirect to="profile" />

    return (
        <div className={styles.login}>
            <h1 className={styles.heading}>Login</h1>
            <LoginForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
        </div>
    )
})

const mstp = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
})

export default connect(mstp, { login })(Login)

type LoginPropsType = {
    isAuth: boolean | null
    captchaUrl: string | null
    login: (data: LoginType) => void
}
