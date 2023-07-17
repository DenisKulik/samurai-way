import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import styles from './AddPostForm.module.scss';
import Button from '../../../Button';

export type AddPostFormDataType = {
    post: string
}

const AddPostForm = (props: InjectedFormProps<AddPostFormDataType>) => {
    const { handleSubmit } = props;

    return (
        <form className={styles.addPostForm} onSubmit={handleSubmit}>
            <Field
                className={styles.postField}
                component="textarea"
                name="post"
                placeholder="What's new?"
            />
            <Button title="Add post" type="submit" />
        </form>
    );
};

export default reduxForm<AddPostFormDataType>({
    form: 'post'
})(AddPostForm);