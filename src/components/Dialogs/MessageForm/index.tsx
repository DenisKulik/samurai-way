import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import styles from './MessageForm.module.scss';
import Button from '../../common/Button';

export type MessageFormDataType = {
    message: string
}

const MessageForm = (props: InjectedFormProps<MessageFormDataType>) => {
    const { handleSubmit } = props;

    return (
        <form className={styles.messageForm} onSubmit={handleSubmit}>
            <Field
                className={styles.messageField}
                component="textarea"
                name="message"
                rows={1}
                placeholder="Enter your message"
            />
            <Button title="Send" type="submit" />
        </form>
    );
};

export default reduxForm<MessageFormDataType>({
    form: 'message'
})(MessageForm);