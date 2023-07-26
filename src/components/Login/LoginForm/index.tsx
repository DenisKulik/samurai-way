import { memo } from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { CustomInput } from 'components/common/FormControl'
import { requiredField } from 'utils/validators'
import styles from './LoginForm.module.scss'

const LoginForm = memo(({ handleSubmit, error }: InjectedFormProps<FormDataType>) => {
    return (
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            {error && <div className={styles.error}>{error}</div>}
            <div>
                <Field
                    name="email"
                    type="text"
                    placeholder="email"
                    component={CustomInput}
                    validate={[requiredField]}
                />
            </div>
            <div>
                <Field
                    name="password"
                    type="password"
                    placeholder="password"
                    component={CustomInput}
                    validate={[requiredField]}
                />
            </div>
            <div>
                <Field name="rememberMe" type="checkbox" component="input" />
                Remember Me
            </div>
            <button>Login</button>
        </form>
    )
})

export default reduxForm<FormDataType>({
    form: 'login',
})(LoginForm)

// types
export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
