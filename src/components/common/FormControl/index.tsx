import { WrappedFieldProps } from 'redux-form';
import styles from './FormControl.module.scss';

export const CustomTextarea = ({
    input,
    meta,
    ...props
}: WrappedFieldProps) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={`${styles.formControl} ${hasError ?
            styles.error : ''}`}>
            <textarea {...input}{...props} />
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};