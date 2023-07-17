import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import styles from './AddPostForm.module.scss';
import Button from '../../../Button';
import { maxLengthCreator, requiredField } from '../../../../utils/validators';
import { FormControl } from '../../../common/FormControl';

export type AddPostFormDataType = {
    post: string
}

const maxLength50 = maxLengthCreator(50);

const AddPostForm = (props: InjectedFormProps<AddPostFormDataType>) => {
    const { handleSubmit } = props;

    return (
        <form className={styles.addPostForm} onSubmit={handleSubmit}>
            <Field
                className={styles.postField}
                component={FormControl}
                name="post"
                validate={[ requiredField, maxLength50 ]}
                placeholder="What's new?"
            />
            <Button title="Add post" type="submit" />
        </form>
    );
};

export default reduxForm<AddPostFormDataType>({
    form: 'post'
})(AddPostForm);