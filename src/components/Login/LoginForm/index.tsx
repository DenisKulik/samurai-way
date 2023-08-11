import { InjectedFormProps, reduxForm } from 'redux-form'
import { createField, CustomInput } from 'components/common/FormControl'
import { requiredField } from 'utils/validators'
import styles from './LoginForm.module.scss'

const LoginForm = ({ handleSubmit, error }: InjectedFormProps<FormDataType>) => {
    return (
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            {error && <div className={styles.error}>{error}</div>}
            {createField('email', 'email', [requiredField], CustomInput, {
                placeholder: 'Enter your email',
            })}
            {createField('password', 'password', [requiredField], CustomInput, {
                placeholder: 'Enter your password',
            })}
            <div className={styles.checkbox}>
                {createField('checkbox', 'rememberMe', [], CustomInput)}
                <label>Remember me</label>
            </div>
            <button>Login</button>
        </form>
    )
}

export default reduxForm<FormDataType>({
    form: 'login',
})(LoginForm)

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
