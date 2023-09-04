import { InjectedFormProps, reduxForm } from 'redux-form'

import { createField, CustomInput, GetStringKeys } from 'components/common/form-control'
import styles from 'components/login/login-form/login-form.module.scss'
import { requiredField } from 'utils/validators/validators'

const LoginForm = ({ handleSubmit, error, captchaUrl }: LoginFormDomainType) => {
    return (
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            {error && <div className={styles.error}>{error}</div>}
            {createField<LoginFormValuesTypeKeys>('email', 'email', [requiredField], CustomInput, {
                placeholder: 'Enter your email',
            })}
            {createField<LoginFormValuesTypeKeys>(
                'password',
                'password',
                [requiredField],
                CustomInput,
                {
                    placeholder: 'Enter your password',
                },
            )}
            <div className={styles.checkbox}>
                {createField<LoginFormValuesTypeKeys>('checkbox', 'rememberMe', [], CustomInput)}
                <label>Remember me</label>
            </div>
            {captchaUrl && <img src={captchaUrl} alt="captcha" />}
            {captchaUrl &&
                createField<LoginFormValuesTypeKeys>(
                    'text',
                    'captcha',
                    [requiredField],
                    CustomInput,
                    {
                        placeholder: 'Enter captcha',
                    },
                )}
            <button>Login</button>
        </form>
    )
}

export default reduxForm<FormDataType, LoginFormPropsType>({
    form: 'login',
})(LoginForm)

// types
type LoginFormPropsType = {
    captchaUrl: string | null
}
export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
type LoginFormValuesTypeKeys = GetStringKeys<FormDataType>
type LoginFormDomainType = LoginFormPropsType & InjectedFormProps<FormDataType, LoginFormPropsType>
