import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import styles from 'features/login/ui/login.module.scss'
import LoginForm, { FormDataType } from 'features/login/ui/login-form'
import { login } from 'features/login/model/auth.reducer'
import { AppStateType } from 'app/model/store'
import { LoginType } from 'features/login/api/auth.api.types'

type Props = {
    isAuth: boolean | null
    captchaUrl: string | null
    login: (data: LoginType) => void
}

const Login = ({ isAuth, captchaUrl, login }: Props) => {
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
}

const mstp = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
})

export default connect(mstp, { login })(Login)
