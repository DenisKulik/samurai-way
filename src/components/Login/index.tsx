import { memo } from 'react'
import { connect } from 'react-redux'
import styles from './Login.module.scss'
import LoginForm, { FormDataType } from './LoginForm'
import { login } from 'redux/authReducer'
import { LoginType } from 'api/socialNetworkAPI'
import { Redirect } from 'react-router-dom'
import { AppStateType } from 'redux/store'

type LoginPropsType = {
    isAuth: boolean
    login: (data: LoginType) => void
}

const Login = memo(({ isAuth, login }: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        login(formData)
    }

    if (isAuth) {
        return <Redirect to="profile" />
    }

    return (
        <div className={styles.login}>
            <h1 className={styles.heading}>Login</h1>
            <LoginForm onSubmit={onSubmit} />
        </div>
    )
})

const mstp = (state: AppStateType) => ({ isAuth: state.auth.isAuth })

export default connect(mstp, { login })(Login)
