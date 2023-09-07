import { Formik, Form, Field, FormikHelpers } from 'formik'
import { FilterType } from 'features/users/api/users.api.types'

type Props = {
    changeUsersFilter: (filter: FilterType) => void
}

export const UsersSearchForm = ({ changeUsersFilter }: Props) => {
    const submit = (values: FormType, { setSubmitting }: FormikHelpers<FormType>) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend !== 'false',
        }
        changeUsersFilter(filter)
        setSubmitting(false)
    }

    return (
        <Formik initialValues={{ term: '', friend: 'null' }} onSubmit={submit}>
            {({ isSubmitting }) => (
                <Form>
                    <Field type="text" name="term" />
                    <Field name="friend" as="select">
                        <option value="null">All</option>
                        <option value="true">Only followed</option>
                        <option value="false">Only unfollowed</option>
                    </Field>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    )
}

type FormType = {
    term: string
    friend: 'true' | 'false' | 'null'
}
