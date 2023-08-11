import { cloneElement, FC, ReactElement, ReactNode } from 'react'
import { Field, WrappedFieldProps } from 'redux-form'
import styles from './FormControl.module.scss'
import { FieldValidatorType } from 'utils/validators'

const FormControl = ({
    input,
    meta: { touched, error },
    children,
    ...props
}: FormControlPropsType) => {
    const hasError = touched && error
    return (
        <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
            {cloneElement(children as ReactElement<ReactNode>, { ...input, ...props })}
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const CustomTextarea = (props: FormControlPropsType) => (
    <FormControl {...props}>
        <textarea />
    </FormControl>
)

export const CustomInput = (props: FormControlPropsType) => (
    <FormControl {...props}>
        <input />
    </FormControl>
)

export function createField<FormKeyType extends string>(
    type: string,
    name: FormKeyType,
    validators: FieldValidatorType[],
    component: FC<FormControlPropsType>,
    props = {},
) {
    return <Field type={type} name={name} validate={validators} component={component} {...props} />
}

// types
type FormControlPropsType = WrappedFieldProps & {
    children: ReactNode
}
