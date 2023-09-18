import { InjectedFormProps, reduxForm } from 'redux-form'

import styles from 'features/profile/ui/profile-info/profile-info.module.scss'
import { ContactsType, ProfileType } from 'features/profile/api/profile.api.types'
import { Contact } from 'features/profile/ui/profile-info/contact'
import {
    createField,
    CustomInput,
    CustomTextarea,
    GetStringKeys,
} from 'common/components/form-control'

const ProfileDataForm = ({ initialValues, handleSubmit, error }: ProfileDataFormDomainType) => {
    const contacts = Object.entries(initialValues.contacts).map(([title, value]) => {
        return (
            <div key={title}>
                <Contact title={title} value="" />
                {createField(`contacts.${title}`, [], CustomInput, { placeholder: title })}
            </div>
        )
    })

    return (
        <form className={styles.inner} onSubmit={handleSubmit}>
            <div>
                <p className={styles.username}>Full Name:</p>
                {createField<ProfileDataFormValuesTypeKeys>('fullName', [], CustomInput)}
            </div>
            <div className={styles.jobInfo}>
                <p>Looking for a job:</p>
                {createField<ProfileDataFormValuesTypeKeys>('lookingForAJob', [], CustomInput, {
                    type: 'checkbox',
                })}
                <p>My skills:</p>
                {createField<ProfileDataFormValuesTypeKeys>(
                    'lookingForAJobDescription',
                    [],
                    CustomTextarea,
                    {
                        placeholder: 'My professional skills',
                    },
                )}
            </div>
            <div>
                <p>About me:</p>
                {createField<ProfileDataFormValuesTypeKeys>('aboutMe', [], CustomTextarea, {
                    placeholder: 'About me',
                })}
            </div>
            {contacts.length > 0 && <div className={styles.contacts}>Contacts: {contacts}</div>}
            <button>Save</button>
            {error && <div>{error}</div>}
        </form>
    )
}

export default reduxForm<ProfileDataFormType, ProfileDataFormPropsType>({
    form: 'edit-profile',
})(ProfileDataForm)

// types
type ProfileDataFormPropsType = {
    initialValues: ProfileType
    onSubmit: (formData: ProfileDataFormType) => void
}
type ProfileDataFormValuesTypeKeys = GetStringKeys<ProfileDataFormType>
export type ProfileDataFormType = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
    contacts: ContactsType
}
type ProfileDataFormDomainType = ProfileDataFormPropsType &
    InjectedFormProps<ProfileDataFormType, ProfileDataFormPropsType>
