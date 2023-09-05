import { InjectedFormProps, reduxForm } from 'redux-form'

import styles from 'features/messages/ui/message-form/message-form.module.scss'
import { Button } from 'common/components/button'
import { createField, CustomTextarea, GetStringKeys } from 'common/components/form-control'
import { maxLengthCreator, requiredField } from 'common/utils/validators'

const maxLength100 = maxLengthCreator(100)

const MessageForm = (props: InjectedFormProps<MessageFormDataType>) => {
    const { handleSubmit } = props

    return (
        <form className={styles.messageForm} onSubmit={handleSubmit}>
            {createField<LoginFormValuesTypeKeys>(
                'message',
                [requiredField, maxLength100],
                CustomTextarea,
                {
                    className: styles.messageField,
                    placeholder: 'Enter your message',
                    rows: 1,
                },
            )}
            <Button title="Send" type="submit" />
        </form>
    )
}

export default reduxForm<MessageFormDataType>({
    form: 'message',
})(MessageForm)

// types
export type MessageFormDataType = {
    message: string
}
type LoginFormValuesTypeKeys = GetStringKeys<MessageFormDataType>
