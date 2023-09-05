import { InjectedFormProps, reduxForm } from 'redux-form'

import styles from 'features/profile/ui/my-posts/add-post-form/add-post-form.module.scss'
import { Button } from 'common/components/button'
import { maxLengthCreator, requiredField } from 'common/utils/validators'
import { createField, CustomTextarea, GetStringKeys } from 'common/components/form-control'

const maxLength50 = maxLengthCreator(50)

const AddPostForm = (props: InjectedFormProps<AddPostFormDataType>) => {
    const { handleSubmit } = props

    return (
        <form className={styles.addPostForm} onSubmit={handleSubmit}>
            {createField<PostFormValuesTypeKeys>(
                'post',
                [requiredField, maxLength50],
                CustomTextarea,
                {
                    className: styles.postField,
                    placeholder: "What's new?",
                },
            )}
            <Button title="Add post" type="submit" />
        </form>
    )
}

export default reduxForm<AddPostFormDataType>({
    form: 'post',
})(AddPostForm)

// types
export type AddPostFormDataType = {
    post: string
}
type PostFormValuesTypeKeys = GetStringKeys<AddPostFormDataType>
