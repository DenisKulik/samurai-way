import { cloneElement, ReactElement, ReactNode } from 'react'
import { WrappedFieldProps } from 'redux-form'
import styles from './FormControl.module.scss'

type FormControlPropsType = WrappedFieldProps & {
    children: ReactNode
}

const FormControl = ({ input, meta, children, ...props }: FormControlPropsType) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={`${styles.formControl} ${hasError ? styles.error : ''}`}>
            {cloneElement(children as ReactElement<ReactNode>, { ...input, ...props })}
            {hasError && <span>{meta.error}</span>}
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
