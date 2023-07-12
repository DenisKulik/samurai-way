import styles from './Login.module.scss';
import LoginForm, { FormDataType } from './LoginForm';

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData);
    };

    return (
        <div className={styles.login}>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit} />
        </div>
    );
};