import { useSelector } from 'react-redux'
import { Formik, Form, Field, FormikHelpers } from 'formik'

import { FilterType } from 'features/users/api/users.api.types'
import { getUsersFilter } from 'features/users/model/users.selectors'

type Props = {
    onChangeUsersFilter: (filter: FilterType) => void
}

export const UsersSearchForm = ({ onChangeUsersFilter }: Props) => {
    const filter = useSelector(getUsersFilter)

    const submit = (values: FormType, { setSubmitting }: FormikHelpers<FormType>) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend !== 'false',
        }
        onChangeUsersFilter(filter)
        setSubmitting(false)
    }

    return (
        <Formik
            initialValues={{
                term: filter.term as string,
                friend: String(filter.friend) as FriendFormType,
            }}
            onSubmit={submit}
        >
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

type FriendFormType = 'true' | 'false' | 'null'
type FormType = {
    term: string
    friend: FriendFormType
}
