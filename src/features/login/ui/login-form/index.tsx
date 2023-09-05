import { InjectedFormProps, reduxForm } from 'redux-form'

import { createField, CustomInput, GetStringKeys } from 'common/components/form-control'
import styles from 'features/login/ui/login-form/login-form.module.scss'
import { requiredField } from 'common/utils/validators/validators'
import { LoginType } from 'features/login/api/auth.api.types'

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
export type FormDataType = Required<LoginType>
type LoginFormValuesTypeKeys = GetStringKeys<FormDataType>
type LoginFormDomainType = LoginFormPropsType & InjectedFormProps<FormDataType, LoginFormPropsType>
