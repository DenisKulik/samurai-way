import { Field, InjectedFormProps, reduxForm } from 'redux-form';

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    name="login"
                    type="text"
                    placeholder="login"
                    component="input"
                />
            </div>
            <div>
                <Field
                    name="password"
                    type="password"
                    placeholder="password"
                    component="input"
                />
            </div>
            <div>
                <Field name="rememberMe" type="checkbox" component="input" />
                Remember Me
            </div>
            <button>Login</button>
        </form>
    );
};

export default reduxForm<FormDataType>({
    form: 'login'
})(LoginForm);