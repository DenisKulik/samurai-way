import { WrappedFieldProps } from 'redux-form';
import styles from './FormControl.module.scss';

export const FormControl = ({
    input,
    meta,
    ...props
}: WrappedFieldProps) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={`${styles.formControl} ${hasError ?
            styles.error : ''}`}>
            <textarea {...input}{...props} />
            {hasError && <span>Some Error</span>}
        </div>
    );
};