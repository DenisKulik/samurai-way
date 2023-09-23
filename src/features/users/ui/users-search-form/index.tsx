import { useSelector } from 'react-redux'
import { Formik, Form, Field, FormikHelpers } from 'formik'

import { FilterType } from 'features/users/api/users.api.types'
import { getUsersFilter } from 'features/users/model/users.selectors'
import styles from './users-search-form.module.scss'
import { Button } from 'common/components/button'

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
                <Form className={styles.form}>
                    <Field type="text" name="term" className={styles.input} />
                    <Field name="friend" as="select" className={styles.input}>
                        <option value="null">All</option>
                        <option value="true">Only followed</option>
                        <option value="false">Only unfollowed</option>
                    </Field>
                    <Button type="submit" title="Submit" disabled={isSubmitting} />
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
