import { memo } from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import styles from './MessageForm.module.scss'
import Button from 'components/common/Button'
import { CustomTextarea } from 'components/common/FormControl'
import { maxLengthCreator, requiredField } from 'utils/validators'

export type MessageFormDataType = {
    message: string
}

const maxLength100 = maxLengthCreator(100)

const MessageForm = memo((props: InjectedFormProps<MessageFormDataType>) => {
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
})

export default reduxForm<MessageFormDataType>({
    form: 'message',
})(MessageForm)
