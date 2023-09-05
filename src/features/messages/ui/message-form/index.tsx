import { Field, InjectedFormProps, reduxForm } from 'redux-form'

import styles from 'features/messages/ui/message-form/message-form.module.scss'
import { Button } from 'common/components/button'
import { CustomTextarea } from 'common/components/form-control'
import { maxLengthCreator, requiredField } from 'common/utils/validators'

export type MessageFormDataType = {
    message: string
}

const maxLength100 = maxLengthCreator(100)

const MessageForm = (props: InjectedFormProps<MessageFormDataType>) => {
    const { handleSubmit } = props

    return (
        <form className={styles.messageForm} onSubmit={handleSubmit}>
            <Field
                className={styles.messageField}
                component={CustomTextarea}
                name="message"
                rows={1}
                validate={[requiredField, maxLength100]}
                placeholder="Enter your message"
            />
            <Button title="Send" type="submit" />
        </form>
    )
}

export default reduxForm<MessageFormDataType>({
    form: 'message',
})(MessageForm)
